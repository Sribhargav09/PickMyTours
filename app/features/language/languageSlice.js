import { createSlice } from '@reduxjs/toolkit'


const languageContent = [
  { id: 1, language: "English", country: "United States" },
  { id: 2, language: "Türkçe", country: "Turkey" },
  { id: 3, language: "Español", country: "España" },
  { id: 4, language: "Français", country: "France" },
  { id: 5, language: "Italiano", country: "Italia" },
  { id: 6, language: "Dari, Pashto", country: "Afghanistan" },
  { id: 7, language: "Albanian", country: "Albania" },
  { id: 8, language: "Arabic, Berber", country: "	Algeria" },
  { id: 9, language: "Catalan", country: "Andorra" },
  { id: 10, language: "Kongo, Portuguese	", country: "Angola" },
  { id: 11, language: "Spanish", country: "Argentina" },
  { id: 12, language: "Armenian", country: "Armenia" },
  { id: 13, language: "English", country: "Australia" },
  { id: 14, language: "German", country: "Austria" },
  { id: 15, language: "Azerbaijani", country: "Azerbaijan" },
  { id: 16, language: "Bengali", country: "Bangladesh" },
  { id: 17, language: "English", country: "Barbados" },
  { id: 18, language: "Belarusian", country: "Belarus" },
  { id: 19, language: "Dutch, French", country: "Belgium" },
  { id: 20, language: "English", country: "India" },
];


export const languageSlice = createSlice({
  name: 'language',
  initialState: {
    languagies: languageContent,
    selectedLanguage: languageContent[0],
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.selectedLanguage = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeLanguage } = languageSlice.actions

export default languageSlice.reducer