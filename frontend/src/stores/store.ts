import { configureStore } from '@reduxjs/toolkit';
import styleReducer from './styleSlice';
import mainReducer from './mainSlice';
import authSlice from './authSlice';
import openAiSlice from './openAiSlice';

import usersSlice from './users/usersSlice';
import analyticsSlice from './analytics/analyticsSlice';
import appointmentsSlice from './appointments/appointmentsSlice';
import campaignsSlice from './campaigns/campaignsSlice';
import coursesSlice from './courses/coursesSlice';
import leadsSlice from './leads/leadsSlice';
import messagesSlice from './messages/messagesSlice';
import rolesSlice from './roles/rolesSlice';
import permissionsSlice from './permissions/permissionsSlice';
import organizationsSlice from './organizations/organizationsSlice';

export const store = configureStore({
  reducer: {
    style: styleReducer,
    main: mainReducer,
    auth: authSlice,
    openAi: openAiSlice,

    users: usersSlice,
    analytics: analyticsSlice,
    appointments: appointmentsSlice,
    campaigns: campaignsSlice,
    courses: coursesSlice,
    leads: leadsSlice,
    messages: messagesSlice,
    roles: rolesSlice,
    permissions: permissionsSlice,
    organizations: organizationsSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
