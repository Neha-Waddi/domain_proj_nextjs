import { connectMongodb } from '@/lib/mongodb'; // Assumes you have a MongoDB connection utility
import UserCredentials from '@/models/user'; // Model for accessing user collection

export const POST = async (req) => {
  try {
    const { query } = await req.json(); // Get the search query from the request body
    
    await connectMongodb(); // Connect to MongoDB

    // Search the database for users matching the query (case-insensitive search)
    const users = await UserCredentials.find({
      domainName: { $regex: query, $options: 'i' } // i makes it case-insensitive
    });

    return new Response(JSON.stringify(users), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'Error searching users' }), { status: 500 });
  }
};
