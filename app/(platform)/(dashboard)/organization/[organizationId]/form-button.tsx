import { Button } from "@/components/ui/button"
import { useFormState } from "react-dom"

export const FormButton = () => {
    const { pending } = useFormState();
    return (
        <Button type="submit" size="sm" className="mt-2" disabled={pending}>
            Submit
        </Button>
    )
}