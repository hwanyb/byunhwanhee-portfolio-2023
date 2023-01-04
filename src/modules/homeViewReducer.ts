const SET_HOME_VIEW = "homeViewReducer/SET_HOME_VIEW" as const;

export const setHomeView = (homeView: ViewState["homeView"]) => ({
  type: SET_HOME_VIEW,
  payload: homeView,
});

type ViewAction = ReturnType<typeof setHomeView>;

type ViewState = {
  homeView: string;
};

const initialState: ViewState = {
  homeView: "main",
};

function homeViewReducer(
  state: ViewState = initialState,
  action: ViewAction,
): ViewState {
  switch (action.type) {
    case SET_HOME_VIEW:
      return {
        ...state,
        homeView: action.payload,
      };
    default:
      return state;
  }
}

export default homeViewReducer;
