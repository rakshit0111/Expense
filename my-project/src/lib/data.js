import { Transition, Saving } from "./models";
import { connectToDB } from "./utils";


export const fetchTransition = async () => {
    try {
        await connectToDB();
        const users = await Transition.find();
        return users;
    }
    catch (err) {
        console.error(err.message, err.stack);
        throw new Error("Failed to fetch Data");
    }
}
export const fetchSavings = async () => {
    try {
        await connectToDB();
        const products = await Saving.find();
        return products;
    }
    catch (err) {
        console.error(err.message, err.stack);
        throw new Error("Failed to fetch savings data");
    }
}
// export const getTransition = async (id) => {
//     try {
//         await connectToDB();
//         const user = await Transition.findById(id);
//         console.log("Fetched transition: ", user);
//         return user;
//     } catch (err) {
//         console.log(err);
//         throw new Error("Failed to fetch data");
//     }
// }
