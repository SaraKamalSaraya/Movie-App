import { configureStore } from "@reduxjs/toolkit";
import WatchListData from './slices/watchList';

export default configureStore({
    reducer : {
        WatchListData: WatchListData,
    }
})