'use client'
import ComicForm from "./ComicForm"

 

export default function AddPage() {
    return (
        <div>
            <h1 className="text-center text-2xl font-bold mt-6">
                Agregar comics
            </h1>
            <div className="w-150 p-8 m-auto flex justify-center rounded-lg">
                <ComicForm></ComicForm>
            </div>
        </div>        
    )
}