import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export type UploadLessone ={
       lessoneTitle:string
       lessoneContent?:any     
}

 export const schema: ZodType<UploadLessone>  = z.object({
    lessoneTitle:z.string(),
    lessoneContent:z
  .any()
  .refine(
    (file) => {
      const ACCEPTED_VIDEO_TYPES = ['video/mp4', 'video/mpeg', 'video/webm']; // Add other accepted video MIME types if needed
      return ACCEPTED_VIDEO_TYPES.includes(file[0]?.type);
    },
    'Only .mp4, .mpeg, and .webm formats are supported for video thumbnails.'
  ),
})



export const useCourselessoneValidate = () => {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<UploadLessone>({ resolver: zodResolver(schema) });
    return {
      register,
      handleSubmit,
      errors,
      reset
    };
  };