'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle,  Button, } from "@/modules/shared"
import { memo, useCallback } from "react"
import { Action, PostInputType, useAddPost } from "../hooks/useAddPost"
import { IPost } from "@/modules/entties/posts/type/posts.type"
import { PostInput } from "./components/PostInput"

export interface IAddPostModalProps {
    open: boolean
    setOpen: (open: boolean) => void
    onSend: (post: IPost) => void
}

export const AddPostModal = memo(({ open, setOpen, onSend }: IAddPostModalProps) => {

    const { state, dispatch, sendPost, handleFileChange } = useAddPost(onSend)
    const send = async () => {
        await sendPost()
        setOpen(false)
    }
    const cachedHandler = useCallback((value: string, type: PostInputType) => {
        dispatch({ type, payload: value } as Action)

    }, [dispatch])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Post</DialogTitle>
                </DialogHeader>
                <PostInput
                    type={PostInputType.TITLE}
                    value={state.title}
                    onChange={(value) => cachedHandler(value as string, PostInputType.TITLE)} />
                <PostInput
                    type={PostInputType.BODY}
                    value={state.body}
                    onChange={(value) => cachedHandler(value as string, PostInputType.BODY)} />

                <PostInput

                    value={state.img as string}
                    type={PostInputType.IMG}
                    onChange={(value) => handleFileChange(value as React.ChangeEvent<HTMLInputElement>)}
                />

                <Button variant="outline" onClick={() => send()}>
                    <p>Send</p>
                </Button>
                <Button variant="outline" onClick={() => setOpen(false)}>
                    <p>Cancel</p>
                </Button>
            </DialogContent>

        </Dialog>
    )
})
