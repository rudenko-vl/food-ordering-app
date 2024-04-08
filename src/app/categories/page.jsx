"use client";
import { useState } from "react";
import  UserTabs  from "@/components/layout/UserTabs";
import { useProfile } from "@/components/UseProfile";
import { RedLoader } from "@/components/layout/Loader";
import toast from "react-hot-toast";

export default function CategoriesPage () {
    const [newCategoryName, setNewCategoryName] = useState('');
    const {loading:profileLoading, data:profileData} = useProfile();

   async function handleNewCategorySubmit (ev) {
        ev.preventDefault();
        const creationPromise = new Promise(async (resolve, reject )=> {
            const response = await fetch('api/categories', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({name:newCategoryName}),
            });
            if (response.ok) 
            resolve();
        else 
        reject();
        });
        await toast.promise(creationPromise, {
            loading: 'Creating new category...',
            success: 'Category created!',
            error: 'Error! :(',
        });
    }

    if (profileLoading) {
        return (<RedLoader size={80}/>)
    }

    if (!profileData.admin) {
        return 'Not an admin!'
    }

    return (
        <section className="mt-8 max-w-lg mx-auto">
            <UserTabs isAdmin={true}/>
            <form className="mt-8" onSubmit={handleNewCategorySubmit}>
                <div className="flex gap-2 items-end">
                    <div className="grow">
                    <label>New category name</label>
                <input type="text" 
                value={newCategoryName}
                onChange={ev => setNewCategoryName(ev.target.value)}
                />
                    </div>
                    <div className="pb-2">
                        <button className="border border-primary" type="submit">Create</button>
                    </div>
                </div>
            </form>
        </section> 
    )
}