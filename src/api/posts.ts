import { keepPreviousData, useQuery } from "@tanstack/vue-query";
import { Ref } from "vue";
import { ApiRoutes } from "../constants/routes";
import apiClient from "../helpers/apiClient";
import { Comment, Post, PostPhoto, PostResponse } from "../models/post";

export const useGetPosts = (page: Ref<number>) => {
  return useQuery<Post[]>({
    queryKey: ["posts", page],
    queryFn: async () => {
      const data = await apiClient.get<PostResponse[]>(ApiRoutes.Posts, {
        _page: page.value,
      });
      const photos = await apiClient.get<PostPhoto[]>(ApiRoutes.Photos, {
        _page: page.value,
      });
      const posts = data.map((post, index) => ({
        ...post,
        url: photos[index].url,
        thumbnailUrl: photos[index].thumbnailUrl,
      }));
      return posts;
    },
    enabled: true,
    placeholderData: keepPreviousData,
  });
};

export const useGetComments = (postId: number) => {
  const { data: comments, isLoading: isCommentLoading } = useQuery<Comment[]>({
    queryKey: ["comments", postId],
    queryFn: async () => {
      const data = await apiClient.get<Comment[]>(ApiRoutes.Comments, {
        postId,
      });
      return data;
    },
  });
  return { comments, isCommentLoading };
};
