import { createSlice, createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";
import newsApi from "../../api/newsApi";
import { APIKey } from "../../api/newsApiKey";
import Article from "../../models/article";




interface NewState {
  data:Article[] | null;
  isLoading:boolean;
  error: null|string;
}

const initialState = {
  isLoading: false,
    error: "",
    data:[] 
  } as NewState;

 
export const fetchAsyncArticles = createAsyncThunk(
    "articles/fetchAsyncArticles",
    async () => {
      const articleTitle = 'bitcoin'
      try{
        const {
          //@ts-ignore
          data:{articles},
        }=await newsApi.get<Article[]>(
          `everything?q=${articleTitle}&apiKey=${APIKey}`
          );
          return articles;
      }catch(error){
        console.log(error);
      }
      
    }
  );
export const fetchAsyncArticlesByCountries = createAsyncThunk(
    "articles/fetchAsyncArticlesByCountries",
    async () => {
      const articleTitle = "Franklin";
      const articleLanguage = "ar";
      const response = await newsApi.get(
        `everything?q=${articleTitle}&apiKey=${APIKey}&country=${articleLanguage}`
      );
      return response.data;
    }
  );

  const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {},
    extraReducers: builder => {
      builder.addCase(fetchAsyncArticles.pending, state => {
        state.isLoading = true
      })
      builder.addCase(fetchAsyncArticlesByCountries.pending, state => {
        state.isLoading = true
      })
      builder.addCase(
        fetchAsyncArticles.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading  = false
          state.data = action.payload;
        }
      )
      builder.addCase(
        fetchAsyncArticlesByCountries.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false
          state.data = action.payload
          state.error = ''
        }
      )
      builder.addCase(fetchAsyncArticles.rejected, (state, action) => {
        state.isLoading = false
        state.data = []
        state.error = action.error.message || 'Wrong'
      })
      builder.addCase(fetchAsyncArticlesByCountries.rejected, (state, action) => {
        state.isLoading = false
        state.data = []
        state.error = action.error.message || 'Wrong'
      })
    }
  })
  
  export default articleSlice.reducer