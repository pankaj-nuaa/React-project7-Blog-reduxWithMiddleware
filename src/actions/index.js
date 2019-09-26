import jsonPlaceHolder from '../apis/jsonPlaceHolder';
import _ from 'lodash';

export const fetchPostsAndusers = () => async (dispatch, getState) => {
    console.log('about to fetch post')
    await dispatch(fetchPost());
    const uniqueIds = _.uniq(_.map(getState().posts, 'userId'));
    uniqueIds.forEach(id => dispatch(fetchUser(id)));
};
export const fetchPost = () => async dispatch => {
    const response = await jsonPlaceHolder.get('/posts')

    dispatch({ type: 'FETCH_POSTS', payload: response.data })
};

export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`);

    dispatch({ type: 'FETCH_USER', payload: response.data })
}