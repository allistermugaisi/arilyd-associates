const dropdownIcon = () => {
	const dropdown = document.createElement('span');
	dropdown.innerHTML = `<svg width="14px" height="7px" viewBox="0 0 10 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	  <g id="Delivery" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
	  <g id="Transactions-(Landing)" transform="translate(-1360.000000, -29.000000)" fill="#CDCFD3" fill-rule="nonzero">
		  <g id="Group-4" transform="translate(1360.000000, 29.000000)">
			  <polygon id="Shape" points="0 0 5 5 10 0"></polygon>
		  </g>
	  </g>
	  </g>
  </svg>`;
	return dropdown;
};

const countries = [
	{
		id: 1,
		name: 'Canada',
		content: `Canada has become a sought after destination for international students wishing to pursue their masters, bachelors or doctorate degrees. <br/><br/>
		Victoria Visa Consultants has expert agents who are there to guide you in terms of student counseling, institute selection and other procedures so give us a visit and we will surely be able to assist you with your visa matters.
	 <br/><br/>Education in Canada is under the complete jurisdiction of the provinces and territories (States) and as such, there is no Federal (Central) education system in Canada. 
	 In keeping with the national commitment to education, public education in Canada is free up to and including secondary school (12th Std), in all the provinces. At the postsecondary level, institutions are divided into community colleges and universities. 
	 A significant number of university graduates attend college upon completion of their degree in order to acquire vocational skills for employment.`,
	},
	{
		id: 2,
		name: 'Australia',
		content: `Australia has become a sought after destination for international students wishing to pursue their masters, bachelors or doctorate degrees.<br/><br/>Victoria Visa Consultants has expert agents who are there to guide you in terms of student counseling, institute selection and other procedures so give us a visit and we will surely be able to assist you with your visa matters.<br/><br/>
		Australia offers a diverse range of study options for international students, with more than 1,200 institutions and over 22,000 courses to choose from. The Australian higher education system consists of independent, self-governing public and private universities and higher education institutions that award higher education qualifications.<br/><br/>
		Australia generally has two intakes i.e. February and July, with few Universities offering multiple intake in September & November. It is suggested that you should start making applications ideally 7-8 months prior to the intake. University generally takes around 4-6 weeks to process the applications.`,
	},
	{
		id: 3,
		name: 'UK',
		content: `UK has become a sought after destination for international students wishing to pursue their masters, bachelors or doctorate degrees.<br/><br/>Victoria Visa Consultants has expert agents who are there to guide you in terms of student counseling, institute selection and other procedures so give us a visit and we will surely be able to assist you with your visa matters.<br/><br/>
		Victoria Visa Consultants has expert agents who are there to guide you in terms of student counseling, institute selection and other procedures so give us a visit and we will surely be able to assist you with your visa matters.<br/><br/>
		UK education is recognized and respected throughout the world. The education system in the UK is divided into four main parts, primary education, secondary education, further education and higher education. Children in the UK have to legally attend primary and secondary education which runs from about 5 years old until the student is 16 years old.<br/><br/>An undergraduate degree normally takes three years to complete but can take longer if they include an industrial placement, an additional subject or a year abroad. They are also specialised from Year One. Students who receive good grades in their undergraduate degrees may choose to take a Masters degree, which takes a minimum of one year to complete. The main intake offered by all Universities is September / October few universities offer January / February intake also. Few universities also offer admission 3 to 4 times in a year.`,
	},
	{
		id: 4,
		name: 'USA',
		content: `USA has become a sought after destination for international students wishing to pursue their masters, bachelors or doctorate degrees.<br/><br/>
		Victoria Visa Consultants has expert agents who are there to guide you in terms of student counseling, institute selection and other procedures so give us a visit and we will surely be able to assist you with your visa matters.<br/><br/>
		Students who have completed high school and would like to attend college or university must attend what is referred to as an undergraduate school. These are schools that offer either a two-year degree (called an associate degree) or a four-year degree (called a bachelors degree) in a specific course of study. That course of study is called the major. While most schools that offer a four-year degree will admit students who have not yet chosen a major, all students are required to select (or declare) a major by their second year at school. Students who complete an associate degree can continue their education at a four-year school and eventually complete a bachelor degree.`,
	},
	{
		id: 5,
		name: 'Belgium',
		content: `Belgium has become a sought after destination for international students wishing to pursue their masters, bachelors or doctorate degrees.<br/><br/>
		Victoria Visa Consultants has expert agents who are there to guide you in terms of student counseling, institute selection and other procedures so give us a visit and we will surely be able to assist you with your visa matters.<br/><br/>
		The Belgium education system is based upon teaching, research and service to the community and is divided among different regions of the country.<br/><br/>
		In addition, you can find university colleges and art colleges which offer long and short-term programs or vocational professional training. Education in Belgium is administered by each region separately and each region determines their own rules regarding admissions, tuition fees and language of instruction.`,
	},
	{
		id: 6,
		name: 'Denmark',
		content: `Denmark has become a sought after destination for international students wishing to pursue their masters, bachelors or doctorate degrees.<br/><br/>
		Victoria Visa Consultants has expert agents who are there to guide you in terms of student counseling, institute selection and other procedures so give us a visit and we will surely be able to assist you with your visa matters.<br/><br/>
		Danish universities promote personal initiative and problem-based learning, combining traditional lectures with industrial placements that allows for the practical application of studies.`,
	},
	{
		id: 7,
		name: 'Czech Republic',
		content: `Czech Republic has become a sought after destination for international students wishing to pursue their masters, bachelors or doctorate degrees.<br/><br/>
		Victoria Visa Consultants has expert agents who are there to guide you in terms of student counseling, institute selection and other procedures so give us a visit and we will surely be able to assist you with your visa matters.<br/><br/>
		Czech Republic is a fascinating and welcoming country. Czech Republic is a heaven for students welcoming around 35,000 internationals each year and offers quality education for free.`,
	},
	{
		id: 8,
		name: 'Estonia',
		content: `Estonia has become a sought after destination for international students wishing to pursue their masters, bachelors or doctorate degrees.<br/><br/>
		Victoria Visa Consultants has expert agents who are there to guide you in terms of student counseling, institute selection and other procedures so give us a visit and we will surely be able to assist you with your visa matters.<br/><br/>
		Estonian higher education is well respected around the world. The country is a participant in the Bologna process, which aims to standardize higher education across Europe, and its University diplomas are internationally accepted. Currently there are 15 public universities in Estonia, and 9 private. English is widely spoken, and most universities in Estonia offer a wide variety of english - taught programs.`,
	},
	{
		id: 9,
		name: 'Finland',
		content: `Estonia has become a sought after destination for international students wishing to pursue their masters, bachelors or doctorate degrees.<br/><br/>
		Victoria Visa Consultants has expert agents who are there to guide you in terms of student counseling, institute selection and other procedures so give us a visit and we will surely be able to assist you with your visa matters.<br/><br/>
		Finland is considered to have one of the best, if not the top, education systems in the world. One of the most unique and greatest things for European international students in Finland is that the education is completely free. Students are not required to pay tuition or fees and even their meals are free. Schools in Finland offer several different types of degree programs including engineering, business and medicine.`,
	},
	{
		id: 10,
		name: 'France',
		content: `France has become a sought after destination for international students wishing to pursue their masters, bachelors or doctorate degrees.<br/><br/>
		Victoria Visa Consultants has expert agents who are there to guide you in terms of student counseling, institute selection and other procedures so give us a visit and we will surely be able to assist you with your visa matters.<br/><br/>
		The French higher education system is one of the best in the world. It is low tuition fees, studying in France is more economical for international students. French universities are near the top of renowned university ranking each year.`,
	},
	{
		id: 11,
		name: 'Germany',
		content: `Germany has become a sought after destination for international students wishing to pursue their masters, bachelors or doctorate degrees.<br/><br/>
		Victoria Visa Consultants has expert agents who are there to guide you in terms of student counseling, institute selection and other procedures so give us a visit and we will surely be able to assist you with your visa matters.<br/><br/>
		Germany is one of the most popular destinations for international students. At German universities, you will enjoy quality education and numerous bachelor's and master's programs taught in english. Most Study programs are also free for all foreign students. `,
	},
	{
		id: 12,
		name: 'Greece',
		content: `Swaziland company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Swaziland Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Swaziland Credit reports, Swaziland Due diligence services, Swaziland Litigation search/checks, Swaziland Property search/checks, Swaziland court records search, Swaziland Adverse media search, Swaziland compliance checks, Swaziland Directorships Checks/search, Swaziland Shareholdings Checks/search., Swaziland Business and market intelligence, Swaziland Risk intelligence data, Swaziland Third-party enhanced due diligence, Swaziland Investigative services.`,
	},
	{
		id: 13,
		name: 'Hungary',
		content: `Zambia company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Zambia Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Zambia Credit reports, Zambia Due diligence services, Zambia Litigation search/checks, Zambia Property search/checks, Zambia court records search, Zambia Adverse media search, Zambia compliance checks, Zambia Directorships Checks/search, Zambia Shareholdings Checks/search., Zambia Business and market intelligence, Zambia Risk intelligence data, Zambia Third-party enhanced due diligence, Zambia Investigative services.`,
	},
	{
		id: 14,
		name: 'Iceland',
		content: `Cameroon company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Cameroon Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Cameroon Credit reports, Cameroon Due diligence services, Cameroon Litigation search/checks, Cameroon Property search/checks, Cameroon court records search, Cameroon Adverse media search, Cameroon compliance checks, Cameroon Directorships Checks/search, Cameroon Shareholdings Checks/search., Cameroon Business and market intelligence, Cameroon Risk intelligence data, Cameroon Third-party enhanced due diligence, Cameroon Investigative services.`,
	},
	{
		id: 15,
		name: 'Italy',
		content: `DRC Congo company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		DRC Congo Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		DRC Congo Credit reports, DRC Congo Due diligence services, DRC Congo Litigation search/checks, DRC Congo Property search/checks, DRC Congo court records search, DRC Congo Adverse media search, DRC Congo compliance checks, DRC Congo Directorships Checks/search, DRC Congo Shareholdings Checks/search., DRC Congo Business and market intelligence, DRC Congo Risk intelligence data, DRC Congo Third-party enhanced due diligence, DRC Congo Investigative services.`,
	},
	{
		id: 16,
		name: 'Latvia',
		content: `Seychelles & Madagascar company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Seychelles & Madagascar Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Seychelles & Madagascar Credit reports, Seychelles & Madagascar Due diligence services, Seychelles & Madagascar Litigation search/checks, Seychelles & Madagascar Property search/checks, Seychelles & Madagascar court records search, Seychelles & Madagascar Adverse media search, Seychelles & Madagascar compliance checks, Seychelles & Madagascar Directorships Checks/search, Seychelles & Madagascar Shareholdings Checks/search., Seychelles & Madagascar Business and market intelligence, Seychelles & Madagascar Risk intelligence data, Seychelles & Madagascar Third-party enhanced due diligence, Seychelles & Madagascar Investigative services.`,
	},
	{
		id: 17,
		name: 'Liechtenstein',
		content: `Malawi company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Malawi Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Malawi Credit reports, Malawi Due diligence services, Malawi Litigation search/checks, Malawi Property search/checks, Malawi court records search, Malawi Adverse media search, Malawi compliance checks, Malawi Directorships Checks/search, Malawi Shareholdings Checks/search., Malawi Business and market intelligence, Malawi Risk intelligence data, Malawi Third-party enhanced due diligence, Malawi Investigative services.`,
	},
	{
		id: 18,
		name: 'Lithuania',
		content: `Zimbabwe company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Zimbabwe Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Zimbabwe Credit reports, Zimbabwe Due diligence services, Zimbabwe Litigation search/checks, Zimbabwe Property search/checks, Zimbabwe court records search, Zimbabwe Adverse media search, Zimbabwe compliance checks, Zimbabwe Directorships Checks/search, Zimbabwe Shareholdings Checks/search., Zimbabwe Business and market intelligence, Zimbabwe Risk intelligence data, Zimbabwe Third-party enhanced due diligence, Zimbabwe Investigative services.`,
	},
	{
		id: 19,
		name: `Luxembourg`,
		content: `Côte d’Ivoire company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Côte d’Ivoire Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Côte d’Ivoire Company Profile Search, Côte d’Ivoire Credit reports, Côte d’Ivoire Due diligence services, Côte d’Ivoire Litigation search/checks, Côte d’Ivoire Property search/checks, Côte d’Ivoire court records search, Côte d’Ivoire Adverse media search, Côte d’Ivoire compliance checks, Côte d’Ivoire Business and market intelligence, Côte d’Ivoire Risk intelligence data, Côte d’Ivoire Third-party enhanced due diligence, Côte d’Ivoire Investigative services.`,
	},
	{
		id: 20,
		name: `Malta`,
		content: `Gambia company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Gambia Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Gambia Company Profile Search, Gambia Credit reports, Gambia Due diligence services, Gambia Litigation search/checks, Gambia Property search/checks, Gambia court records search, Gambia Adverse media search, Gambia compliance checks, Gambia Business and market intelligence, Gambia Risk intelligence data, Gambia Third-party enhanced due diligence, Gambia Investigative services.`,
	},
	{
		id: 21,
		name: `Netherlands`,
		content: `Mali company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Mali Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Mali Company Profile Search, Mali Credit reports, Mali Due diligence services, Mali Litigation search/checks, Mali Property search/checks, Mali court records search, Mali Adverse media search, Mali compliance checks, Mali Business and market intelligence, Mali Risk intelligence data, Mali Third-party enhanced due diligence, Mali Investigative services.
		`,
	},
	{
		id: 22,
		name: `Norway`,
		content: `Mauritania company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Mauritania Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Mauritania Company Profile Search, Mauritania Credit reports, Mauritania Due diligence services, Mauritania Litigation search/checks, Mauritania Property search/checks, Mauritania court records search, Mauritania Adverse media search, Mauritania compliance checks, Mauritania Business and market intelligence, Mauritania Risk intelligence data, Mauritania Third-party enhanced due diligence, Mauritania Investigative services.`,
	},
	{
		id: 23,
		name: `Poland`,
		content: `Niger company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Niger Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Niger Company Profile Search, Niger Credit reports, Niger Due diligence services, Niger Litigation search/checks, Niger Property search/checks, Niger court records search, Niger Adverse media search, Niger compliance checks, Niger Business and market intelligence, Niger Risk intelligence data, Niger Third-party enhanced due diligence, Niger Investigative services.`,
	},
	{
		id: 24,
		name: `Portugal`,
		content: `Sierra Leone company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Sierra Leone Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Sierra Leone Company Profile Search, Sierra Leone Credit reports, Sierra Leone Due diligence services, Sierra Leone Litigation search/checks, Sierra Leone Property search/checks, Sierra Leone court records search, Sierra Leone Adverse media search, Sierra Leone compliance checks, Sierra Leone Business and market intelligence, Sierra Leone Risk intelligence data, Sierra Leone Third-party enhanced due diligence, Sierra Leone Investigative services.`,
	},
	{
		id: 25,
		name: `Slovakia`,
		content: `Togo company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Togo Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Togo Company Profile Search, Togo Credit reports, Togo Due diligence services, Togo Litigation search/checks, Togo Property search/checks, Togo court records search, Togo Adverse media search, Togo compliance checks, Togo Business and market intelligence, Togo Risk intelligence data, Togo Third-party enhanced due diligence, Togo Investigative services.`,
	},
	{
		id: 26,
		name: `Slovenia`,
		content: `Equatorial Guinea company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Equatorial Guinea Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Equatorial Guinea Company Profile Search, Equatorial Guinea Credit reports, Equatorial Guinea Due diligence services, Equatorial Guinea Litigation search/checks, Equatorial Guinea Property search/checks, Equatorial Guinea court records search, Equatorial Guinea Adverse media search, Equatorial Guinea compliance checks, Equatorial Guinea Business and market intelligence, Equatorial Guinea Risk intelligence data, Equatorial Guinea Third-party enhanced due diligence, Equatorial Guinea Investigative services.`,
	},
	{
		id: 27,
		name: `Spain`,
		content: `Gabon company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Gabon Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Gabon Company Profile Search, Gabon Credit reports, Gabon Due diligence services, Gabon Litigation search/checks, Gabon Property search/checks, Gabon court records search, Gabon  Adverse media search, Gabon compliance checks, Gabon Business and market intelligence, Gabon Risk intelligence data, Gabon Third-party enhanced due diligence, Gabon Investigative services.`,
	},
	{
		id: 28,
		name: `Sweden`,
		content: `Angola company registry documents- Registry extracts, annual returns certificate of incorporation.<br/><br/>
		Angola Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Angola Company Profile Search, Angola Credit reports, Angola Due diligence services, Angola Litigation search/checks, Angola Property search/checks, Angola court records search, Angola  Adverse media search, Angola compliance checks, Angola Business and market intelligence, Angola Risk intelligence data, Angola Third-party enhanced due diligence, Angola Investigative services.`,
	},
	{
		id: 29,
		name: `Switzerland`,
		content: `Eritrea Business information reports- company name & registration Number, legal status, Registered address, shareholdings & directorships.<br/><br/>
		Eritrea Company Profile Search, Eritrea Credit reports, Eritrea Due diligence services, Eritrea Adverse media search, Eritrea compliance checks, Eritrea Business and market intelligence, Eritrea Risk intelligence data, Eritrea Third-party enhanced due diligence, Eritrea Investigative services.`,
	},
];

const printArea = document.querySelector('#content');

const dropdown = () => {
	const component = document.createElement('div');

	const input = createInput();
	const dropdown = showDropdown();

	component.appendChild(input);
	component.appendChild(dropdown);
	printArea.appendChild(component);
};

const createInput = () => {
	// Creates the input outline
	const input = document.createElement('div');
	input.classList = 'input';
	input.addEventListener('click', toggleDropdown);

	// Creates the input placeholder content
	const inputPlaceholder = document.createElement('div');
	inputPlaceholder.classList = 'input__placeholder';

	const placeholder = document.createElement('p');
	placeholder.textContent = 'Select Country';
	placeholder.classList.add('placeholder');

	// Appends the placeholder and chevron (stored in assets.js)
	inputPlaceholder.appendChild(placeholder);
	inputPlaceholder.appendChild(dropdownIcon());
	input.appendChild(inputPlaceholder);

	return input;
};

const showDropdown = () => {
	const structure = document.createElement('div');
	structure.classList.add('structure', 'hide');

	countries.forEach((country) => {
		const { id, name, content } = country;
		const option = document.createElement('div');

		option.addEventListener('click', () => selectOption(name));
		option.addEventListener('click', () => selectContentOption(content));
		option.setAttribute('id', id);
		option.setAttribute('class', 'options');

		const n = document.createElement('h5');
		n.textContent = name;

		// const t = document.createElement('p');
		// t.textContent = `(${content})`;

		option.appendChild(n);
		// option.appendChild(t);
		structure.appendChild(option);
	});
	return structure;
};

const toggleDropdown = () => {
	const dropdown = document.querySelector('.structure');
	dropdown.classList.toggle('hide');

	const input = document.querySelector('.input');
	input.classList.toggle('input__active');
};

const selectOption = (name) => {
	const text = document.querySelector('.placeholder');
	const country = document.querySelector('#country');
	text.textContent = name;
	country.textContent = name;
	text.classList.add('input__selected');
	toggleDropdown();
};

const selectContentOption = (content) => {
	const text = document.querySelector('#content-info');
	text.innerHTML = content;

	// text.classList.add('input__selected');
	// toggleDropdown();
};

dropdown();

// Select Canada on page load as default selected value
let options = document.querySelectorAll('.options'),
	name = 'Canada',
	contentSelected = `Canada has become a sought after destination for international students wishing to pursue their masters, bachelors or doctorate degrees. <br/><br/>
	Victoria Visa Consultants has expert agents who are there to guide you in terms of student counseling, institute selection and other procedures so give us a visit and we will surely be able to assist you with your visa matters.
 <br/><br/>Education in Canada is under the complete jurisdiction of the provinces and territories (States) and as such, there is no Federal (Central) education system in Canada. 
 In keeping with the national commitment to education, public education in Canada is free up to and including secondary school (12th Std), in all the provinces. At the postsecondary level, institutions are divided into community colleges and universities. 
 A significant number of university graduates attend college upon completion of their degree in order to acquire vocational skills for employment.`;

// console.log(options[0].childNodes[0].textContent);
// console.log(options);

for (i = 0; i < options.length; i++) {
	if (options[i].textContent.indexOf(name) > -1) {
		selectOption(name);
		selectContentOption(contentSelected);
		toggleDropdown();
		break;
	}
}
