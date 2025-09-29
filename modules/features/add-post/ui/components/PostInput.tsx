'use client'
import { memo } from "react"
import { Input } from "@/modules/shared/shadcn/components/ui/input"
import { Textarea } from "@/modules/shared/shadcn/components/ui/textarea"

import { PostInputType } from "../../hooks/useAddPost"


export interface IPostInnputProps {
    type: PostInputType
    value: string
    onChange: (value: string | React.ChangeEvent<HTMLInputElement>) => void
}
export const PostInput = memo(({
    type = PostInputType.TITLE,
    value,
    onChange,
}: IPostInnputProps) => {


    return (<>
        {type === PostInputType.TITLE && (
            <Input
                value={value}
                onChange={(e: any) => onChange(e.target.value)}
            />
        )}
        {type === PostInputType.BODY && (
            <Textarea
                value={value}
                onChange={(e: any) => onChange(e.target.value)}
            />
        )}
        {type === PostInputType.IMG && <Input
            style={{ cursor: 'pointer' }}

            type="file"
            onChange={(e) => onChange(e)}
        />}
    </>)
})
