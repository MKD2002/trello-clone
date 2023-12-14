"use client"

import { Button } from "@/components/ui/button"
import { useFormState } from "react-dom"

export const FormDelete = () => {
    const {pending} = useFormState();
    return (
        <Button variant="destructive" size="sm" type="submit" disabled={pending}>
            Delete
        </Button>
    )
}