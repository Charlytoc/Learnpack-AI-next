// The store is responsible for managing the state of the application
// This store was created with Zustand

import { create } from 'zustand';
import { convertMarkdownToHTML, changeSidebarVisibility } from './lib';
import { exercises } from '../resources/testObjects';

const HOST = "http://localhost:3000";

interface IStore {
  exercises: any[];
  currentContent: string;
  currentExercisePosition: number;
  language: string;
  lessonTitle: string;
  numberOfExercises: number;

  fetchExercises: () => void;
  getLessonTitle: () => void;
  setPosition: (position: number) => void;
  fetchReadme: () => void;
  toggleSidebar: () => void;
  toggleLanguage: () => void;
}

const useStore = create<IStore>((set, get) => ({
  // states
  language: 'us',
  exercises: [],
  currentContent: "",
  currentExercisePosition: 0,
  lessonTitle: "",
  numberOfExercises: 0,
  
  // functions
  fetchExercises: async () => {
    const { fetchReadme, getLessonTitle } = get();
    const res = await fetch(`${HOST}/exercise`)
    const files = await res.json();
    set({ exercises: files });
    set({numberOfExercises: files.length})
    fetchReadme();
    getLessonTitle();

  },

  getLessonTitle: async () => {
    const res = await fetch(`${HOST}/config`);
    const {config} = await res.json();
    set({ lessonTitle: config.title });
  },
  setPosition: (newPosition: number) => {
    set({ currentExercisePosition: newPosition });
  },

  fetchReadme: async () => {
    const { language, exercises, currentExercisePosition } = get();
    const slug = exercises[currentExercisePosition].slug;
    const response = await fetch(`${HOST}/exercise/${slug}/readme?lang=${language}`);
    const exercise = await response.json();
    set({ currentContent: convertMarkdownToHTML(exercise.body) })
  },

  toggleSidebar: () => {
    changeSidebarVisibility()
  },

  toggleLanguage: () => {
    const { language, fetchReadme } = get();
    const newLang = language === 'us' ? 'es' : 'us';
    set({ language: newLang });
    fetchReadme();
  },

})
);

export default useStore;