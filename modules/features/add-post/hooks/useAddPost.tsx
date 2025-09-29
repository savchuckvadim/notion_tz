"use client"
import { useEffect, useReducer, useState } from "react"
import { useAppSelector } from "@/modules/app/model/hooks/redux"
import type { IPost } from "@/modules/entties/posts/type/posts.type"
import { sendPost } from "@/modules/entties/posts/lib/getPosts"

// начальное состояние
const initialState = {
    title: "",
    body: "",
    img: "" as File | null | string,
}
export enum PostInputType {
    TITLE = "title",
    BODY = "body",
    IMG = "img",

}
export type Action =
    | { type: PostInputType.TITLE; payload: string }
    | { type: PostInputType.BODY; payload: string }
    | { type: PostInputType.IMG; payload: File | null | string }
    | { type: "reset" }

const reducer = (state: typeof initialState, action: Action) => {
    switch (action.type) {
        case PostInputType.TITLE:
            return { ...state, title: action.payload }
        case PostInputType.BODY:
            return { ...state, body: action.payload }
        case PostInputType.IMG:
            return { ...state, img: action.payload }

        case "reset":
            return initialState
        default:
            return state
    }
}

export const useAddPost = (onSend: (post: IPost) => void) => {
    const [open, setOpen] = useState(false)
    const [state, dispatch] = useReducer(reducer, initialState)

    const userId = useAppSelector((s) => s.user.current?.id)

    const getPost = (): Partial<IPost> => ({
        ...state,
        userId,
    })




    return {
        open,
        setOpen,
        state,
        dispatch,
        sendPost: async () => {

            const { id: newPostId } = await sendPost(getPost());

            const createdPost = {
                ...getPost(),
                id: newPostId,
            };
            onSend(createdPost as IPost);
            setOpen(false)
            dispatch({ type: 'reset' })
            return createdPost;
        },
        handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0] || null
            if (!file) {
                dispatch({ type: PostInputType.IMG, payload: file }); return;
            }

            const previewUrl = URL.createObjectURL(file)
            dispatch({ type: PostInputType.IMG, payload: previewUrl })
        },

        getPost,
        reset: () => dispatch({ type: "reset" }),
    }
}
