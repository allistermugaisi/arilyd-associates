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
		name: 'Book Keeping',
		content: `The objective of Book-Keeping and Accountancy services is to help the directors or owners of
        the business make informed, accurate and timely decisions for the day to day running operations
        of the business in general and to particularly monitor critical aspects of the business such as
        sales, purchases, expenses and profitability patterns. Moreover, the book keeping and
        accountancy of a business has to be done in such a way to ensure compliance with the
        International Financial Reporting Standards and local legal requirements like the Companies Act,
        Income Tax Act, VAT Act, etc... <br/><br/>
        The objective of financial statements is to provide information about the financial position,
        performance and changes in financial position of an equity that is useful to a wide range of users
        in making economic decisions. In particular we tailor make the book keeping processes to ensure
        the qualitative aspects of understandability, relevance, reliability and comparability of the
        financial statements are captured.
        <br/><br/>The accounting services would in details for example involve:<br/><br/>
        <strong>On a weekly basis:</strong><br/><br/>1. Posting Sales<br/>2. Posting Purchases<br/>3. Posting Cashbook<br/>4. Reconciliation of daily banking against daily sales collections.<br/><br/>
        <strong>On a weekly basis:</strong><br/><br/>1. Monthly Management Accounts.<br/>2. Preparing Schedules of all cost centers.<br/>3. Preparing schedules for all revenue centers.<br/>
        4. Reconciliation of Cashbook and the bank Statements.<br/>5. Extracting trial balance.<br/>6. Income Statements &amp; Balance Sheet.`,
	},
	{
		id: 2,
		name: 'Accounting System Set Up and Monitoring',
		content: `The impact of Information Technology in business cannot be over-emphasized. However, to
        achieve maximum output results from the IT use, the business must carefully plan and design its
        systems before implementation. Technological advances have created an environment of rapid
        growth, and in response, accounting has evolved in complexity.<br/><br/>
        The use of IT is supposed to process data into information in a format that reflects the business
        operations as per the users’ requirements and expectations. Thus the need to design the systems
        to as per reporting expectations to the management. Hence we assist our clients in designing and
        implementing an appropriate Accounting system tailor made to their financial requirements.
        <br/><br/>Accounting soft-wares are generally classified into three tiers, from the lowest (basic)
        applications to the higher ones that combine all business functions. Tier three includes the easy
        to use accounting software that requires minimal accounting or book keeping skills. For example
        some of the off shelf packages such as QuickBooks, Pastel &amp; Sage which are designed for small
        to medium size businesses that have less complicated accounting environment. But some
        medium to large sized firms may prefer custom-built software projects or Enterprise Resource
        Planning (ERP) for complete integration across all functional departments in the organization.<br/><br/>
        Through computerized accounting, the role of accountants focus more on taking center stage in
        their companies i.e. handling greater responsibility and participating in broader business issues.
        In regard to Accounting systems design and implementation, we advise our clients on the
        appropriate financial management solution to adopt and in particular ensures the system is
        appropriate by considering:<br/><br/>1. The system is cost effective and achieves sound return on the investment.<br/>
        2. The system is able to integrate all aspects of the business.<br/>3. The system is able to harness the internet, powerful database and network technologies
        to the extent of information, applications, and processes to employees, customers and
        suppliers.<br/>4. The system is supported, has been tried and tested.<br/>5. The system is flexible to allow business changes.<br/>
        6. The system is strongly secured; strong security features hard to crack by unauthorized
        persons.`,
	},
	{
		id: 3,
		name: 'Taxation Management Services',
		content: `The objective in tax management is to offer professional advice to our clients so as to ensure that
        they comply with the various tax regulations in force. Non-compliance is an offence that could
        attract heavy penalties and or custodial sentences.<br/><br/>Thus we do this by advising our client how to plan their operations such that they incur only the
        necessary taxes that they must pay in regard to the business operations without necessarily
        committing the offence of tax evasion. This is a critical area in the overall business management
        because virtually all businesses have to pay taxes in one form or another.<br/><br/>The tax laws are by their nature very dynamic, in fact the Kenyan tax system is constantly under
        review almost yearly during government budget and as such the businesses need to keep abreast
        with all the changes and evaluate their impact in their overall business.<br/><br/>
        The firm boasts of a team with in-depth understanding and experience of the Kenyan tax law
        system as stipulated in the various tax Acts i.e. the Income Tax Act Cap 470, VAT Act Cap 476,
        Customs &amp; Excise Act Cap 472 and other tax related laws.
        <br/><br/>The accounting services would in details for example involve:<br/><br/>
        <strong>Income Taxes:</strong><br/><br/>1. Annual Income Tax Returns Computations and filing with the Income Tax Department.<br/>2. The Monthly Pay as you Earn (PAYE) and Annual PAYE returns for Employers.<br/>
        3. Annual Individual PAYE Return. It’s now mandatory for all individuals to make their annual
        selfassessment to Income tax department by 30th June of every year to assess whether they
        overpaid or underpaid income taxes. Overpaid taxes are refundable by KRA.<br/>4. Withholding taxes.<br/><br/>
        <strong>Value Added Taxes:</strong><br/><br/>1. Monthly VAT Returns.<br/>2. VAT refunds claims for instance all VAT claims above Ksh. 1,000,000 must have an auditor&#39;s
        certificate.<br/>3. Customs &amp; Excise Taxes.<br/>
        4. Tax computations on Imports, i.e. computation of duty, excise taxes and VAT on imports.<br/>5. Extracting trial balance.<br/>Export and Import documentation.<br/><br/><strong>Rental Income Taxes:</strong><br/><br/>
        1. Monthly and annual Residential Rental Income Tax returns.<br/>2. Monthly and annual Rental
        Income Tax returns,`,
	},
	{
		id: 4,
		name: 'Payroll Management',
		content: `The objective of Payroll Management is to provide information on human resource costs and
        how best to manage the same. The business may prefer to outsource its payroll functions so as to
        concentrate on its core business.<br/><br/>
        The firm guarantees the highest level of confidentiality in dealing with payroll matters and
        ensures compliance with the various statutory regulations.
        <br/><br/>Monthly Payroll administration will involve processing the following:<br/><br/>
        1. Processing the Master Payroll<br/>2. Preparing the monthly pay slips per employee.<br/>3. Preparing NSSF monthly and annual returns.<br/>4. Preparing NHIF monthly and annual returns.<br/>5. Preparing PAYE (P9 &amp; P10) monthly and annual returns<br/>
        `,
	},
	{
		id: 5,
		name: 'Internal Audit Services',
		content: `As the business expands, its complexity increases and hence its functions must be done by
        different personnel at different levels. But not all businesses are able to maintain a fully-fledged
        internal audit department within its organization structures, yet still the management need to
        assure them that the internal control systems are working as intended.<br/><br/>
        The objectives of an accounting system are to ensure that all transactions are completely and
        accurately processed and recorded and the resulting accounting entries are valid.
        The purpose of internal audit is to ensure that the accounting systems of internal control are
        working in the business as they were intended to.<br/><br/>
        Internal audit function thus becomes necessary principally to prevent, detect, correct and
        adequately disclose errors and irregularities in addition to ensuring an efficient and orderly
        conduct of business adherence to management policies.<br/><br/>Internal audit functions can be done weekly, monthly, or at quarterly intervals depending on the
        preference of the management. The frequency of the interval chosen would depend on the level
        of exposure of the business risk of error, misstatement, falsification of record and fraud.
        `,
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
	name = 'Book Keeping',
	contentSelected = `The objective of Book-Keeping and Accountancy services is to help the directors or owners of
    the business make informed, accurate and timely decisions for the day to day running operations
    of the business in general and to particularly monitor critical aspects of the business such as
    sales, purchases, expenses and profitability patterns. Moreover, the book keeping and
    accountancy of a business has to be done in such a way to ensure compliance with the
    International Financial Reporting Standards and local legal requirements like the Companies Act,
    Income Tax Act, VAT Act, etc... <br/><br/>
    The objective of financial statements is to provide information about the financial position,
    performance and changes in financial position of an equity that is useful to a wide range of users
    in making economic decisions. In particular we tailor make the book keeping processes to ensure
    the qualitative aspects of understandability, relevance, reliability and comparability of the
    financial statements are captured.
    <br/><br/>The accounting services would in details for example involve:<br/><br/>
    <strong>On a weekly basis:</strong><br/><br/>1. Posting Sales<br/>2. Posting Purchases<br/>3. Posting Cashbook<br/>4. Reconciliation of daily banking against daily sales collections.<br/><br/>
    <strong>On a weekly basis:</strong><br/><br/>1. Monthly Management Accounts.<br/>2. Preparing Schedules of all cost centers.<br/>3. Preparing schedules for all revenue centers.<br/>
    4. Reconciliation of Cashbook and the bank Statements.<br/>5. Extracting trial balance.<br/>6. Income Statements &amp; Balance Sheet.`;

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
