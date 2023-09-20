// The store is responsible for managing the state of the application
// This store is created with Zustand

import { create } from 'zustand';
import { convertMarkdownToHTML, changeSidebarVisibility } from './lib';
const HOST = "http://localhost:3000";

interface IStore {
  fetchExercises: () => void;
  exercises: any[];
  currentContent: string;
  currentExercisePosition: number;
  language: string;
  setPosition: (position: number) => void;
  fetchReadme: () => void;
  toggleSidebar: () => void;
  toggleLanguage: () => void;
}


const useStore = create<IStore>((set, get) => ({
  fetchExercises: async () => {
    const {fetchReadme} = get();
    const res = await fetch(`${HOST}/exercise`)
    const files = await res.json();
    // console.log(files);
    set({exercises: files});
    fetchReadme();
    
  },
  language: 'us',
  setPosition: (newPosition:number) => {
    set({currentExercisePosition: newPosition});
  },
  fetchReadme: async () => {
    
    const {language, exercises, currentExercisePosition} = get();
    const slug = exercises[currentExercisePosition].slug;

    const response = await fetch(`${HOST}/exercise/${slug}/readme?lang=${language}`);

    const exercise = await response.json();

    set({currentContent: convertMarkdownToHTML(exercise.body)})

  },
  toggleSidebar: () => {
    changeSidebarVisibility()
  },
  toggleLanguage:()=>{
    const {language, fetchReadme} = get();
    const newLang = language === 'us'?'es':'us';
    set({language:newLang});
    fetchReadme();
  },
  exercises: [],
  currentContent: "",
  currentExercisePosition: 0,
})

);

export default useStore;