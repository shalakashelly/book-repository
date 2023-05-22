import userReducer, { initialState, authUser } from './userSlice';

describe('userSlice', () => {
  describe('reducer', () => {
    it('should handle authUser action', () => {
      const username = 'JohnDoe';

      const nextState = userReducer(initialState, authUser({ username }));

      expect(nextState.userInfo).toEqual({ username });
    });

    it('should not modify state for unknown action types', () => {
      const nextState = userReducer(initialState, { type: 'unknown' });

      expect(nextState).toEqual(initialState);
    });
  });

  describe('actions', () => {
    it('should create authUser action', () => {
      const username = 'JohnDoe';

      const action = authUser({ username });

      expect(action.type).toEqual('user/authUser');
      expect(action.payload).toEqual({ username });
    });
  });
});
