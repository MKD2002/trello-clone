"use client"

import { Input } from "@/components/ui/input";
import { useFormState } from "react-dom";

interface FormInputProps {
    errors?: {
        title?: string[];
    }
}

export const FormInput = ({ errors }: FormInputProps) => {
    const { pending } = useFormState()
    return (
        <div>
            < Input
                id="title"
                name="title"
                required
                placeholder="Enter a board title"
                disabled={pending}
            />
            {errors?.title ? (
                <div>
                    {
                        errors?.title?.map((error: string) => (
                            <p className="text-rose-500" key={error}>
                                {error}
                            </p>
                        ))
                    }
                </div>
            ) : null}
        </div>
    )
}