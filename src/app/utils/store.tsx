// The store is responsible for managing the state of the application
// This store is created with Zustand

import { create } from 'zustand';
import { convertMarkdownToHTML } from './lib';
const HOST = "http://localhost:3000";

interface IStore {
  numberOfStudents: number;
  fetchExercises: () => void;
  exercises: any[];
  currentContent: string;
  language: string;
  fetchReadme: (slug:string) => void;
}


const useStore = create<IStore>((set, get) => ({
  numberOfStudents: 3,
  fetchExercises: async () => {
    const {fetchReadme} = get();
    const res = await fetch(`${HOST}/exercise`)
    const files = await res.json();
    // console.log(files);
    set({exercises: files});
    fetchReadme(files[0].slug);
    
  },
  language: 'en',
  fetchReadme: async (slug) => {
    
    const {language} = get();
    
    const response = await fetch(`${HOST}/exercise/${slug}/readme?lang=${language}`);
    // console.log(response);
    
    const exercise = await response.json();

    set({currentContent: convertMarkdownToHTML(exercise.body)})

  },
  exercises: [],
  currentContent: "",


})

);

export default useStore;