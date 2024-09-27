import { connectMongodb } from '@/lib/mongodb';
import UserCredentials from '@/models/user'; 

export const POST = async (req) => {
  try {
    const { query } = await req.json(); 
    
    await connectMongodb();
    const users = await UserCredentials.find({
      domainName: { $regex: query, $options: 'i' }
    });

    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error searching users' }), { status: 500 });
  }
};
