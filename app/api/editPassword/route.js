import UserCredentials from "@/models/user";
import { connectMongodb } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export const POST = async (req) => {
  const { username, oldPassword, newPassword, confirmPassword } = await req.json();
  
  await connectMongodb();

  try {
    const user = await UserCredentials.findOne({ username });
    console.log(username);
    console.log(user);
   console.log(newPassword);
   console.log(confirmPassword);

    if (!user) {
      return new Response(JSON.stringify({ message: 'User not found' }), { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
    if (!isPasswordValid) {
      return new Response(JSON.stringify({ message: 'Old password is incorrect' }), { status: 400 });
    }

    if (newPassword !== confirmPassword) {
      return new Response(JSON.stringify({ message: 'New password and confirmation password do not match' }), { status: 400 });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    user.password = hashedPassword;
    await user.save();

    return new Response(JSON.stringify({ message: 'Password updated successfully' }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: 'An error occurred while updating the password' }), { status: 500 });
  }
};
