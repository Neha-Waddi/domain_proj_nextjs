import { connectMongodb } from '@/lib/mongodb';
import UserCredentials from '@/models/user';
import bcrypt from 'bcryptjs';


export async function POST(req) {
  await connectMongodb();

  const { username, domainName, url, password, confirmPassword } = await req.json();
  const existingUser = await UserCredentials.findOne({ username });
  if (existingUser) {
    return new Response(JSON.stringify({ error: 'Username already exists' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new UserCredentials({
    username,
    domainName,
    url,
    password: hashedPassword,
  });

  const savedUser = await newUser.save();

  return new Response(JSON.stringify({ message: 'User created successfully', user: savedUser }), {
    status: 201,
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
