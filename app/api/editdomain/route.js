import UserCredentials from "@/models/user";
import { connectMongodb } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  const { username, password, newdomain, confirmdomain } = await req.json();
  
  await connectMongodb();

  try {
    const user = await UserCredentials.findOne({ username });

    if (!user) {
      return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: ' password is incorrect' }), { status: 400 });
    }

    if (newdomain !== confirmdomain) {
      return new Response(JSON.stringify({ message: 'New domain and confirmation domain do not match' }), { status: 400 });
    }

    user.domainName = newdomain;
    await user.save();

    return new Response(JSON.stringify({ message: 'domain updated successfully' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'An error occurred while updating the domain' }), { status: 500 });
  }
};
