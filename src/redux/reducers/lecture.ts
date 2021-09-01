import produce from 'immer';
import { IAction, ILectureInfo, ILecture, IMainSliderData, LectureData } from './types';

// redux lecture state
export interface ILectureState {
  mainLectures: ILecture[];
  totalLectureCount: number;
  loadLectureLoading: boolean;
  loadLectureError?: string;
  mainSliderList: IMainSliderData[];
  loadSliderLoading: boolean;
  loadSliderError?: string;
  createLectureLoading: boolean;
  createLectureDone: boolean;
  createLectureError?: string;
  createLectureData: ILectureInfo;
  editLectureLoading: boolean;
  editLectureError?: string;
  lectureData: LectureData; // edit page layout에서 불러오는 data
}

export const initialState: ILectureState = {
  mainLectures: [],
  totalLectureCount: 0,
  loadLectureLoading: true,
  loadLectureError: undefined,
  mainSliderList: [],
  loadSliderLoading: true,
  loadSliderError: '',
  createLectureLoading: false,
  createLectureData: {
    id: undefined,
    title: undefined,
    whatYouCanLearn: [],
    expectedStudents: [],
    requiredKnowledge: [],
    category: [],
    level: '',
  },
  createLectureError: undefined,
  createLectureDone: false,
  editLectureLoading: false,
  lectureData: {
    courseInfo: {
      id: undefined,
      title: undefined,
      whatYouCanLearn: [],
      expectedStudents: [],
      requiredKnowledge: [],
      category: [],
      level: '',
    },
  },
};

// action types
export const LOAD_ALL_LECTURES_REQUEST = 'LOAD_ALL_LECTURES_REQUEST';
export const LOAD_ALL_LECTURES_SUCCESS = 'LOAD_ALL_LECTURES_SUCCESS';
export const LOAD_ALL_LECTURES_FAILURE = 'LOAD_ALL_LECTURES_FAILURE';

export const LOAD_SLIDER_REQUEST = 'LOAD_SLIDER_REQUEST';
export const LOAD_SLIDER_SUCCESS = 'LOAD_SLIDER_SUCCESS';
export const LOAD_SLIDER_FAILURE = 'LOAD_SLIDER_FAILURE';

export const CREATE_LECTURE_REQUEST = 'CREATE_LECTURE_REQUEST';
export const CREATE_LECTURE_SUCCESS = 'CREATE_LECTURE_SUCCESS';
export const CREATE_LECTURE_FAILURE = 'CREATE_LECTURE_FAILURE';

export const DONE_CREATE_LECTURE = 'DONE_CREATE_LECTURE';

// edit course page action
export const LOAD_EDIT_LECTURE_REQUEST = 'LOAD_EDIT_LECTURE_REQUEST';
export const LOAD_EDIT_LECTURE_SUCCESS = 'LOAD_EDIT_LECTURE_SUCCESS';
export const LOAD_EDIT_LECTURE_FAILURE = 'LOAD_EDIT_LECTURE_FAILURE';

// export const DELETE_ITEM_IN_TEXT_BOX = 'DELETE_ITEM_IN_TEXT_BOX';
export const DELETE_ITEM_WHATYOUCANLEARN = 'DELETE_ITEM_WHATYOUCANLEARN';
export const DELETE_ITEM_EXPECTEDSTUDENTS = 'DELETE_ITEM_EXPECTEDSTUDENTS';
export const DELETE_ITEM_REQUIREDKNOWLEDGE = 'DELETE_ITEM_REQUIREDKNOWLEDGE';

// reducer
const reducer = (state = initialState, action: IAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      // lecture list initial load
      case LOAD_ALL_LECTURES_REQUEST:
        draft.loadLectureLoading = true;
        break;
      case LOAD_ALL_LECTURES_SUCCESS:
        draft.loadLectureLoading = false;
        draft.mainLectures = action.data.concat(draft.mainLectures);
        break;
      case LOAD_ALL_LECTURES_FAILURE:
        draft.loadLectureLoading = false;
        draft.loadLectureError = action.error;
        break;
      // slider
      case LOAD_SLIDER_REQUEST:
        draft.loadSliderLoading = true;
        break;
      case LOAD_SLIDER_SUCCESS:
        draft.loadSliderLoading = false;
        draft.mainSliderList = action.data;
        break;
      case LOAD_SLIDER_FAILURE:
        draft.loadSliderLoading = false;
        draft.loadSliderError = action.error;
        break;
      // create_course -> course/:id/edit/course_info
      case CREATE_LECTURE_REQUEST:
        draft.createLectureLoading = true;
        draft.createLectureDone = false;
        draft.createLectureData.title = action.data;
        break;
      case CREATE_LECTURE_SUCCESS:
        draft.createLectureLoading = false;
        draft.createLectureDone = true;
        draft.createLectureData.id = action.data;
        break;
      case CREATE_LECTURE_FAILURE:
        draft.createLectureLoading = false;
        draft.createLectureDone = true;
        draft.createLectureError = action.error;
        break;
      case DONE_CREATE_LECTURE:
        draft.createLectureDone = false;
        break;

      case LOAD_EDIT_LECTURE_REQUEST:
        draft.editLectureLoading = true;
        break;
      case LOAD_EDIT_LECTURE_SUCCESS:
        draft.editLectureLoading = false;
        draft.lectureData = action.data;
        break;
      case LOAD_EDIT_LECTURE_FAILURE:
        draft.editLectureLoading = false;
        draft.editLectureError = action.error;
        break;
      // case DELETE_ITEM_IN_TEXT_BOX:
      //   action.data.textList.splice(action.data.index, 1);
      //   console.log(DELETE_ITEM_IN_TEXT_BOX, action.data.textList);
      //   break;
      case DELETE_ITEM_WHATYOUCANLEARN:
        draft.lectureData.courseInfo.whatYouCanLearn = action.data;
        break;

      // 나머지 추후 추가 예정
      default:
        break;
    }
  });
};

export default reducer;
