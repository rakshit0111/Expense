"use server";
import { redirect } from "next/navigation";
import { Transition, Saving } from "./models";
import { connectToDB } from "./utils"

import { revalidatePath } from "next/cache";

const addTransition = async (formData) => {
    "use server"
    const { transition, type, amount, status } = Object.fromEntries(formData)
    try {
        connectToDB();



        const newtransition = new Transition({
            transition,
            type, amount,
            status
        })

        await newtransition.save();
    }
    catch (err) {
        console.log(err);

    }
    redirect("/Components/Body")
}
export default addTransition;


export const addSaving = async (formData) => {

    const { title, target, saving } = Object.fromEntries(formData);
    try {
        connectToDB();
        const newSaving = new Saving({
            title, target, saving
        });
        await newSaving.save();
    }
    catch (err) {
        console.log(err);

    }
    redirect("/Components/Body")
}



export const deleteTransition = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();
        await Transition.findByIdAndDelete(id);

    }
    catch (err) {
        console.log("failed to delete");
    }
    revalidatePath('/Components/Body')

}


export const deleteSaving = async (formData) => {
    const { id } = Object.fromEntries(formData);

    try {
        connectToDB();
        await Saving.findByIdAndDelete(id);

    }
    catch (err) {
        console.log("failed to delete");
    }
    revalidatePath('/Components/Body')

}




