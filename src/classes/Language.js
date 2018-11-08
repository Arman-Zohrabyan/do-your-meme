import lang from '../../config/languages';


class Language {
	language = 'ru';

	setCurrentLang = language => {
		this.language = language;
	}

	take = key => {
		const { language } = this;
		return lang[language][key];
	};
}

export default new Language();
