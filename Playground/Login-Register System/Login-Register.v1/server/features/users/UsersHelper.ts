import UserModel from "./UserModel";

export async function emailExist(email: string): Promise<boolean> {
    try {
        const isExist = await UserModel.find({email});
        if(isExist.length > 0) {
            return true; 
        }
        return false;
    } catch (error) {
        console.error(error);
    }
}