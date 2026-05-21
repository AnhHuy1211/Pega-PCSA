// questions.js — All 164 unique questions
// To add/edit questions: modify this file only.
// Format: { id, section, text, type ("single"|"multi"), options:[], correct:[], explanation:"" }

const QUESTIONS = [
{
  id:1,
  section:"Pega",
  text: "Select each Process Step Description on the left and drap it to the appropriate Process Step on the right.",
  type: "match",
  pairs:[
    {left:"Total customer inquiry cases per state per product line",right:"Business Report"},
    {left:"Top 10 merchants with highest percentage of fraud cases",right:"Business Report"},
    {left:"The number of customer support request cases created per week",right:"Process Report"},
    {left:"Average duration and timeliness per assignment",right:"Process Report"},
  ],
},
{
  id:2,
  section:"Pega",
  text:"A manager requests a report that contains the following columns: Create Date, Case ID, Create Operator, and Work Status.\nYou must sort the cases so the case with the most recent create date appears at the top of the list and descends in order.\nHow do you design the report definition to support this requirement?",
  type:"single",
  options:["Select Lowest to Highest sort type for Create Date","Select Highest to Lowest sort type for Create Date","Add a filter condition where Create Date is greater than the current date","Make the Create Date the first column in the report"],
  correct:[1],
  explanation:"To show the most recent create date first, set the Create Date sort type to Highest to Lowest.",
},
{
  id:3,
  section:"Pega",
  text:"A purchase request list report includes columns for case ID and regional cost center.A manager wants the report to show the total number of purchase of the regional cost centers.How do you configure the report definition?",
  type:"single",
  options:["Create a filter for each cost center and count the Case IDs","Summarize the Case ID column by count","Define a function for the cost center column to total the Case IDs","Summarize the regional cost centers by count"],
  correct:[1],
  explanation:"To show the total number of purchase requests, summarize the Case ID column by count.",
},
{
  id:4,
  section:"Pega",
  text:"To reduce scrolling on a view, you want to organize existing content so that detail display when an option is selected in a drop-down menu.\nThere is no drop-down menu currently on the view.\nWhich two configuration archive the business requirement? (Choose Two)",
  type:"multi",
  options:["Configure a layout to separate each option into individual panel and set the layout format to menu format","Configure a disable condition (when rule) on each field to allow access when the associated option is selected on the drop-down","Configure a data relationship to select the option using the Drop-down list record selection","Configure a repeating dynamic layout with an embedded section for each option and set the layout format to grouped"],
  correct:[0,3],
  explanation:"Use a menu-format layout with individual panels and a grouped repeating dynamic layout with embedded sections to show details when options are selected.",
},
{
  id:5,
  section:"Pega",
  text:"Which two statements are true about insights? (Choose Two)",
  type:"multi",
  options:["Visibility is always shared for insights charts","You can edit application data directly in an insight","You can use only preconfigured fields in an insight","Insight transform data queries into sharable visualizations"],
  correct:[2,3],
  explanation:"Insights use preconfigured fields and transform data queries into sharable visualizations. They do not always share visibility, and they do not allow direct editing of application data.",
},
{
  id:6,
  section:"Pega",
  text:"Select each security policy on the left and drag it to the appropriate use case on the right.",
  type:"match",
  pairs:[
    {left:"A user is required to verify their identity with a one-time password sent by SMS text message.",right:"Multi-factor authentication policies"},
    {left:"Stop or slow a brute-force attack by enforcing a waiting period after three failed attempts.",right:"Lockout policies"},
    {left:"Stop or slow a brute-force attack by enforcing a challenge-response test upon authentication failure.",right:"CAPTCHA policies"}
  ],
},
{
  id:7,
  section:"Pega",
  text:"Which two configurations, when used together, allow you to track updates to field values in your application? (Choose Two)",
  type:"multi",
  options:["Select the field that you want to track","Enable field auditing on the Case type landing page","Add the Administrator role to the case type","Enable field-level auditing on the view that contains the field that you want to track"],
  correct:[0,1],
  explanation:"Track field updates by enabling field auditing on the case type landing page and enabling field-level auditing on the view containing the field.",
},
{
  id:8,
  section:"Pega",
  text:"Based on security factors, which two options are considered strong passwords? (Choose Two)",
  type:"multi",
  options:["1Lik3Chocolate$trawDust!crea@m","bluedoor","Pe64$yst3m$","dbfrbfg;ebgkerbgkrdb"],
  correct:[0,3],
  explanation:"Strong passwords use mixed case, numbers, and special characters, such as options A and C.",
},
{
  id:9,
  section:"Pega",
  text:"An internal aplication currently grants 75 employees access to one of four roles: Admin, Author, User, and Manager. \nA new analyst that joins the company requires all the Author role access but only some of the reporting capiabilities available to the manager role.\nHow do you you satisfy this security requirement?",
  type:"single",
  options:["Update the Author role to include the required analyst reports","Add the analyst to the Manager role","Add the analyst to both the Author role and the Case Manager channel interface","Create a new Analyst role with the required access"],
  correct:[3],
  explanation:"Create a new Analyst role with the required access so the analyst gets Author privileges plus only the needed reporting capabilities without granting full Manager access.",
},
{
  id:10,
  section:"Pega",
  text:"Which three options can you configure for a mobile app channel? (Choose Three)",
  type:"multi",
  options:["Change the host for a mobile app to a production system, rather than a development system.","Define UI behavior for a view when displayed on a mobile device","Establish security for a mobile app, such as the use of biometric identifier","Identify how different mobile devices render UI controls.","Define the role applied to users when they run the mobile app"],
  correct:[0,2,4],
  explanation:"Mobile app channels can configure mobile-specific UI behavior, security settings, and the role applied to app users.",
},
{
  id:11,
  section:"Pega",
  text:"ABC BankCorp operates two subsidiaries, GlobalBank and LocalBank, with different brandings. ABC BankCorp wants to create a mobile app experience for both users and customer service representatives (CSRs) for its Transaction Dispute application. Of the following requirements, which two options affect the number of mobile app channels that you need to configure? (Choose Two)",
  type:"multi",
  options:["Customer can create only dispute cases, while CSRs can also create fraud report cases.","The app customizes currency units and date/time format according to the user's locale","Mobile apps must support both phones and tablets","Mobile app color palette is customized for each subsidiary"],
  correct:[0,3],
  explanation:"Different user capabilities and branding requirements can each require a separate mobile app channel.",
},
{
  id:12,
  section:"Pega",
  text:"Which two use cases are supported by configuring a mobile channel in App Studio? (Choose Two)",
  type:"multi",
  options:["Grant access to the application for a specific user","Set the width of an application icon to 180x180 pixels","Configure a left swipe behavior to open a message","Lock the application after 20 minutes of inactivity"],
  correct:[2,3],
  explanation:"Mobile channels support behaviors like swipe gestures and application inactivity locking.",
},
{
  id:13,
  section:"Pega",
  text:"A case type for voiceover requests includes two tasks: Edit Script and Record Script. Your team has been asked to route Edit Script tasks to editors and Record Script tasks to actors. Which approach fulfills this requirement?",
  type:"single",
  options:["Create one work group for both personas and route to the work group","Create one new work queue and split the tasks by type","Create two new work queues, one for editor and one for actors.","Create two new work groups in Dev Studio that reference one work queue."],
  correct:[2],
  explanation:"Create two new work queues—one for editors and one for actors—so each task type routes to the appropriate persona.",
},
{
  id:14,
  section:"Pega",
  text:"A survey is sent to a customer via email. How do you configure a solution to ensure the email includes the case ID for the survey?",
  type:"single",
  options:["Create a process using the Send Email step allowing representatives to quickly add the case ID to the email.","Call a data transform to copy the case ID from pyWorkPage to the email.","Use the Insert Property feature of a Send Email step to add the case ID when composing the message dialog.","Create a required field for the case ID that must be entered by a user during the case process prior to sending the survey."],
  correct:[2],
  explanation:"Use the Insert Property feature in the Send Email step to automatically add the case ID to the survey email.",
},
{
  id:15,
  section:"Pega",
  text:"How do you indicate the progress of a case towards resolution?",
  type:"single",
  options:["Design intent-driven user interfaces.","Use stages to show the case progressing toward resolution.","Configure a case notes field to capture progress information.","Apply service levels to the assignment steps."],
  correct:[1],
  explanation:"Use stages to indicate the progress of the case toward resolution in the case lifecycle.",
},
{
  id:16,
  section:"Pega",
  text:"Which requirement demonstrates the need to configure correspondence?",
  type:"single",
  options:["Assign a new insurance claim to a case worker to process.","Phone a customer for additional information about the case.","Email the case worker when the insurance claim is routed to their worklist.","Case worker receives a mobile push notification to approve an insurance claim."],
  correct:[2],
  explanation:"Sending an email to a case worker when the claim is routed to their worklist demonstrates the need for correspondence configuration.",
},
{
  id:17,
  section:"Pega",
  text:"Select each Process Step Description on the left and drag it to the appropriate Process Step on the right.",
  type:"match",
  pairs:[
    {left:"The system evaluates the request type to determine the next step.",right:"Decision"},
    {left:"The system notifies the user of the case status by email.",right:"Automation"},
    {left:"A user enters information for an IT request.",right:"Collect Information"},
    {left:"A manager determines whether an expense report proceeds or is rejected.",right:"Approval"}
  ],
},
{
  id:18,
  section:"Pega",
  text:"To the Answer Area, select the appropriate configuration type for each use case.",
  type:"match",
  pairs:[
    {left:"Customers are asked a series of questions about their design preferences and are presented with a set of recommended products.",right:"Decision Tree"},
    {left:"Research grants are screened by the Grant department, reviewed by functional experts, and approved by the Finance team.",right:"Decision Table"},
    {left:"Requests to rent company office equipment require approval from the Facilities manager or IT manager.",right:"Neither a Decision table nor Decision tree"}
  ],
},
{
  id:19,
  section:"Pega",
  text:"An insurance claim case type is defined as follows. If the Review claim step is configured to set the status to Pending-Investigation, when is the status of the case set to Pending-Investigation?",
  type:"single",
  options:["When the Review claim step starts","When the Process claim stage starts","When Investigate claim step completes","When the Review claim step completes"],
  correct:[0],
  explanation:"The status is set when the Review claim step starts, because that step is configured to set the status at its start."  
},
{
  id:20,
  section:"Pega",
  text:"You are designing a credit transaction case type and have the following requirement: Transaction disputes must be resolved within 3 days. To meet this requirement you need to set the ______ in the service level to 3 days.",
  type:"single",
  options:["Urgency","Goal","Deadline","Passed deadline"],
  correct:[2],
  explanation:"The service level deadline should be set to 3 days to enforce resolution within that timeframe."  
},
{
  id:21,
  section:"Pega",
  text:"You are developing a case type to process visa application. As part of the process, applicants need to schedule an interview with the consulate.\nA child Interview case is created for the interview process and assessment.\nFollowing the interview, it typically takes 48 hours for the consulate to reach a decision.\nFor the visa case to proceed to applicant notification, the Interview case needs to be resolved.\nHow do you configurate a case type to achieve the required behavior?",
  type:"single",
  options:["Add a Create Case step that creates the Interview child case. Following this step, add a Wait step that pauses the parent case until 48 hours have elapsed.","Add a Create Case step that creates the Interview child case. Following this step, add a Wait step that pauses the parent case until the Interview case reaches a status of Resolved and after 48 hours have elapsed.","Add a Create Case step that creates the Interview child case. Following this step, add a Wait step. There is no need to add a Wait step.","Add a Create Case step that creates the Interview child case. Following this step, add a Wait step that pauses the parent case until the Interview case reaches a status of Resolved."],
  correct:[3],
  explanation:"The parent case should wait until the Interview child case reaches Resolved before proceeding to applicant notification."  
},
{
  id:22,
  section:"Pega",
  text:"A company often receives multiple IT tickets for the same issue, such as 'The office Wi-Fi is down'.\nYou configure a Search duplicate cases step to identify duplicate IT tickets.\nWhat is the basic condition for the Search duplicate cases step?",
  type:"single",
  options:["Office location is same","Issue type is same","Department is same","Name of submitter is same"],
  correct:[1],
  explanation:"The basic duplicate condition is usually matching the issue type for tickets describing the same problem."  
},
{
  id:23,
  section:"Pega",
  text:"A life insurance company has satellite offices in various countries. Each satellite office has a work queue. Company policy requires that life insurance underwriting be assigned to offices based on the policy owner's residential address.\nWhich routing approach supports this requirement?",
  type:"single",
  options:["Route the assignment to a specific underwriter based on business logic.","Route the assignment to the correct work queue based on business logic.","Route the assignment to the correct work queue by using an authority matrix.","Route the assignment to the correct work queue by using reporting structure."],
  correct:[1],
  explanation:"Routing to the correct work queue based on business logic supports address-based office assignment."  
},
{
  id:24,
  section:"Pega",
  text:"A restaurant has a case type that allows customers to book the dining room for events. Customers provide basic information including party size and indicate whether they want the restaurant to cater the event.\n- If catering is not required, customers are given a rental rate quote.\n- If customer indicate that they want the restaurant to cater the event,  they must provide menu preferences and schedule an appoinment to  do menu before they are given a quote.\nWhich two options do you configure the case type to achieve the requests behavior (Choose Two)",
  type:"multi",
  options:["Create a process for customers to indicate menu preferences and schedule the menu tasting appointment. Add the process as a case-wide optional action.","Create a check box for customers to indicate whether they want the restaurant to cater the event. Configure the menu preferences and appointment date fields with a visibility condition.","Create a check box for customers to indicate whether they want the restaurant to cater the event. Add the decision shape that evaluates whether the customer checks the box.","Create a process for providing menu preferences and scheduling the menu tasting appointment. Create a parallel process for providing the customer with the rental rate quote."],
  correct:[1,3],
  explanation:"Use a checkbox and visibility conditions to show menu preference fields only when catering is selected."  
},
{
  id:25,
  section:"Pega",
  text:"Which studio do you use to configure a service level agreement (SLA) with a passed deadline?",
  type:"single",
  options:["App Studio","Dev Studio","Admin Studio","Prediction Studio"],
  correct:[1],
  explanation:"SLAs with passed deadline configurations are done in Dev Studio."  
},
{
  id:26,
  section:"Pega",
  text:"A travel authorization requires approvals from the requestor's manager, division VP, and possibly an accountant based on the total amount.\nWhich configuration satisfies this use case?",
  type:"single",
  options:["Cascading approval using an authority matrix","Cascading approval using the workgroup manager","Cascading approval using when rules to identify the assigned user","Cascading approval using the reporting manager"],
  correct:[0],
  explanation:"An authority matrix supports cascading approvals based on multiple roles and total amount conditions."  
},
{
  id:27,
  section:"Pega",
  text:"A meal delivery service recommends a meal plan based on the number of people in the household and dietary restrictions.\nWhich two configurations must be used together to determine the recommended meal plan? (Choose Two)",
  type:"multi",
  options:["Configure a decision tree","Configure an assignment to gather customer information","Configure a decision shape to add conditional path","Configure a decision table"],
  correct:[1,3],
  explanation:"Gather customer information and use a decision shape to add conditional paths for meal plan recommendations."  
},
{
  id:28,
  section:"Pega",
  text:"An airline has the following requirement: A passenger requiring a service animal must document the type of animal, the size of the animal, and any relevant medical information the crew may need during the flight. The application prompts the passenger for this information when the passenger declares travel with a service animal.\nWhich case life cycle configuration meets this requirement?",
  type:"single",
  options:["Add a process to the case life cycle for service animal accommodation and apply a condition to determine when to run the process.","Create a child case for service animal accommodation to automatically resolve unless the passenger requires the accommodation.","Apply an optional action to the appropriate stage to allow the passenger to provide the information as needed.","Configure a stage in the case life cycle for service animal accommodation and apply a stage validation condition."],
  correct:[0],
  explanation:"A conditional process in the case life cycle is appropriate when the service animal accommodation should run only if the passenger declares a service animal."  
},
{
  id:29,
  section:"Pega",
  text:"In which two situations is it appropriate to use a decision table? (Choose Two)",
  type:"multi",
  options:["A gym recommends a membership type based on the number and type of fitness classes the customer wants to attend every month.","If customers decide to add insurance, checked bags, or early boarding to their airline tickets, extra fees are added to their order total.","A hair care company suggests a line of products to customers based on their hair type, scalp moisture, hair moisture, and whether it is color treated.","Order total is calculated based on the quantity and price of the items in the customer's shopping cart."],
  correct:[0,2],
  explanation:"Decision tables are useful for recommending outcomes based on combinations of multiple conditions, such as membership options or hair care product recommendations."  
},
{
  id:30,
  section:"Pega",
  text:"A user must provide values to certain fields before submitting a job application form. Which configuration adds asterisks to indicate the mandatory fields on the form?",
  type:"single",
  options:["Select the Required option when configuring the view from the case life cycle","Configure a Disable when condition on the mandatory fields at runtime","Use a Validate rule to verify the mandatory fields have a value","Use an Edit Validate rule to verify if each of the mandatory properties has a value"],
  correct:[0],
  explanation:"Selecting the Required option in the view configuration adds asterisks to mandatory fields."  
},
{
  id:31,
  section:"Pega",
  text:"You are designing a form to display item details for an online bookstore. Which layout do you use to display the book covers and details, as shown in the image?",
  type:"single",
  options:["Dynamic layout","Screen layout","Repeating Dynamic layout","Column layout"],
  correct:[2],
  explanation:"A Repeating Dynamic layout is used to display multiple book cover items with details in the same format."  
},
{
  id:32,
  section:"Pega",
  text:"You need to test whether a user interface is suitable for users with visual disabilities, such as Deuteranopia (red-green confusion). How do you perform this task?",
  type:"single",
  options:["Unit test section rules","Use the Accessibility Inspector","Enable the live UI tool","Use a screen reader extension"],
  correct:[1],
  explanation:"The Accessibility Inspector is used to test UI suitability for visual disabilities like color blindness."  
},
{
  id:33,
  section:"Pega",
  text:"All managers must be able to view the Employee vacation requests report in their Manager portal dashboards. Which configuration fulfills this requirement?",
  type:"single",
  options:["Add a report widget to the portal dashboard, and then click Publish to default","Add a report widget to the portal dashboard, and then click Publish.","Create a new landing page on the portal with the new report saved in public category.","Add the report to a public category, and then add the out-of-the-box Reports landing page to the portal."],
  correct:[0],
  explanation:"Publishing the report widget to the default portal dashboard makes it available to managers in their Manager portal dashboards."  
},
{
  id:34,
  section:"Pega",
  text:"Which description explains how the configured events occur in the Cell Properties action set?",
  type:"single",
  options:["When a user refreshes the section, a data transform is applied. If the payment is confirmed, the Order ID value is set to the value of the Confirmation Number property.","When a user clicks the button, the section is refreshed, and a data transform is applied. If the payment is confirmed, the Order ID value is set to the value of the Confirmation Number property.","When a user clicks the button, the section is refreshed, a data transform is applied, and the Order ID value is set to the value of the Confirmation Number property.","If the payment is confirmed when the user clicks the button, the section is refreshed, a data transform is applied, and the Order ID value is set to the value of the Confirmation Number property."],
  correct:[1],
  explanation:"The configured action refreshes the section on click and applies a data transform when the payment is confirmed to set the Order ID from the Confirmation Number."  
},
{
  id:35,
  section:"Pega",
  text:"Which control types allow you to display three balance transfer offers on a form with a single control, to prevent the customer from selecting more than one offer? (Choose Two)",
  type:"multi",
  options:["Drop down list","Button","Radio buttons","Checkbox"],
  correct:[0,2],
  explanation:"A drop down list and radio buttons allow only one selection from a single control set."  
},
{
  id:36,
  section:"Pega",
  text:"A customer views a product that is available in multiple color options. The product color options are displayed without prompting or clicking, and the customer can select only one of the color options. Which UI control satisfies the requirement?",
  type:"single",
  options:["Drop down","Text input","Radio button","Checkbox"],
  correct:[2],
  explanation:"Radio buttons display multiple visible options and allow the user to select only one."  
},
{
  id:37,
  section:"Pega",
  text:"A reservation process allows customers to reserve a flight, hotel room, and rental car as part of a travel itinerary. Which configuration displays the 'Select number of checked bags' section only if a user selects a check box?",
  type:"single",
  options:["A required condition (when rule) that is applied to the check box","A disable condition (when rule) that is applied to the check box","A visibility condition (when rule) that is applied to the Select number of checked bags section","A disable condition (when rule) that is applied to the Select number of checked bags section"],
  correct:[2],
  explanation:"Use a visibility condition on the section so it appears only when the checkbox is selected."  
},
{
  id:38,
  section:"Pega",
  text:"Which two rules do you localize by using the Localization wizard? (Choose Two)",
  type:"multi",
  options:["Data page","Correspondence Fragment","Paragraph","Decision Table"],
  correct:[1,2],
  explanation:"The Localization wizard is used for localizing content rules such as correspondence fragments and paragraphs."  
},
{
  id:39,
  section:"Pega",
  text:"In the Answer area, choose the correct test type for each test characteristic.",
  type:"match",
  pairs:[
    {left:"Least number of tests in the test suite",right:"Scenario Test"},
    {left:"Least expensive to run",right:"Unit Test"},
    {left:"Easiest to maintain",right:"Unit Test"}
  ],
},
{
  id:40,
  section:"Pega",
  text:"Which two configuration steps must be performed together to record a unit test for automated testing? (Choose Two)",
  type:"multi",
  options:["Add a test case to the Automated Test landing page","Add an assertion to define an expected result","Select a ruleset that is configured to store the results of the test","Select a ruleset that is configured to store automated test cases"],
  correct:[1,3],
  explanation:"Recording a unit test requires defining expected results with assertions and selecting a ruleset configured to store automated test cases."  
},
{
  id:41,
  section:"Pega",
  text:"Which two conditions do you test with a unit test? (Choose Two)",
  type:"multi",
  options:["A property value is set correctly by a data transform","An application displays user views for 20 users within three seconds","A data page populates without any errors","An application is successfully migrated to a test system"],
  correct:[0,2],
  explanation:"Unit tests verify specific application logic and data population behavior, not scalability or migration."  
},
{
  id:42,
  section:"Pega",
  text:"A Bussiness Architect has developed a new process for a case type. To verify that the UI elements collect the expected results, you want to test the process and the fields.\nWhich two configurations, when used together, allow you to record a set of interactions and save the test results to verify process functionality? ( Choose two)",
  type:"multi",
  options:["Add exploit assertions on the UI elements","Add exploit assertions on the Scenario testing landing page","Create a scenario test for the case type","Create a unit test for the case type"],
  correct:[1,2],
  explanation:"A scenario test verifies that the UI elements work together to collect expected results for the case type."  
},
{
  id:43,
  section:"Pega",
  text:"Doing playback a stakeholder prefers to group a set of existing action into the multistep form.\nWhich work item do you create in Agile Workbench to address this change request?",
  type:"single",
  options:["Status","Feedback","User Story","Bug"],
  correct:[1],
  explanation:"Feedback work items are used to capture stakeholder requests during playback sessions."  
},
{
  id:45,
  section:"Pega",
  text:"Before development, your team creates a spreadsheet with work items to populate backlog. All work items that describe business requirements are prioritized as Must have. You also create work items to address:\n- A future enhancement request to group a set of existing steps into a multistep form.\n- A drop-down list that is missing one of the requirement options. This work item is in progress because the missing option prevents work from being done.\nHow do you populate the backlog directly from the spreadsheet?",
  type:"single",
  options:["Create bugs","Create feedback","Import stories","Create stories"],
  correct:[2],
  explanation:"Import stories populates the backlog directly from the spreadsheet with business requirement work items."  
},
{
  id:46,
  section:"Pega",
  text:"A developer is attempting to reference a validate rule called ValidatedCustomer from a flow action applied to a case type class called ACME-IT-Work. The case type class directly inherits from the Work- class. The case type class does not contain a ValidatedCustomer validate rule. Place the class in the order in which Pega searches for the ValidatedCustomer validate rule, from first to last.",
  type:"match",
  pairs:[
    {left:"ACME-",right:"3"},
    {left:"ACME-IT",right:"2"},
    {left:"ACME-IT-Work",right:"1"},
    {left:"@baseclass",right:"5"},
    {left:"Work-",right:"4"},
  ],
},
{
  id:47,
  section:"Pega",
  text:"Which two components on the Case Designer can users assign to a minimum Lovable Product (MLP) for project sizing purposes? (Choose Two)",
  type:"multi",
  options:["An external system of record (SOR)","An approval decision","A mobile User Portal","An automation"],
  correct:[0,2],
  explanation:"Users can assign components such as an external system of record and a mobile User Portal to MLP for sizing."  
},
{
  id:48,
  section:"Pega",
  text:"For which use case do you create a new rule in a Pega platform application?",
  type:"single",
  options:["A developer makes change an email message configured in the case life cycle.","A business user issues a change request for the application to set the default value of a field.","A developer create a parallel process to audit changes that a service agent makes.","A designer reuses a UI section every time the same behavior is needed in the application."],
  correct:[2],
  explanation:"Creating a new rule is appropriate when adding a parallel process to audit changes that a service agent makes."  
},
{
  id:49,
  section:"Pega",
  text:"Which two statements are true about minimum Lovable Product (MLP) sizing when using the Estimator tool? (Choose Two)",
  type:"multi",
  options:["Initial estimations are high level and can be referred during sizing","Creation of case steps is factored into MLP sizing","MLP complexities set to 'high' are reserved for MLP 2 and later","MLP sizing leads to precision in the sprint cycle and resource planning"],
  correct:[1,3],
  explanation:"MLP sizing factors in case steps and helps improve precision in sprint cycle and resource planning."  
},
{
  id:50,
  section:"Pega",
  text:"To qualify for an instant loan, an applicant must earn a monthly income of at least GBP2000 and cannot exceed GBP20000 in credit card debt. How do you enforce these restrictions when requesting an instant loan?",
  type:"single",
  options:["Use a single Validate rule with two conditions: one for income and one for credit card debt","Use a Validate rule to call two Edit validate rules: one for income and one for credit card debt","Use UI controls to validate the metric in the income and credit card debt fields","Use two Edit validate rules: one for income and one for credit card debt"],
  correct:[0],
  explanation:"Separate Edit Validate rules are used for each field to enforce income and credit card debt restrictions."  
},
{
  id:51,
  section:"Pega",
  text:"When a user selects an item in a list, application displays data about that item. Data is copied to a page property using the Copy data from the data page option. When does the copy occur?",
  type:"single",
  options:["When the item is changed","Never","The next time the case is opened","The next time the property is accessed"],
  correct:[0],
  explanation:"Copying from the data page happens when the property is accessed, not immediately on selection."  
},
{
  id:52,
  section:"Pega",
  text:"In a Credit Card Payment case type, you want to set the payment amount to the minimum amount due when a user creates a case. How do you set the payment amount?",
  type:"single",
  options:["Configure the payment amount field to reference the minimum amount due","Configure the payment amount field as a calculated field","Configure the pySetFieldDefaults data transform to set the default value","Configure a field validation on the payment amount"],
  correct:[2],
  explanation:"pySetFieldDefaults is used to assign default field values when a case is created."  
},
{
  id:53,
  section:"Pega",
  text:"What is the relationship between pyWorkPage and case data?",
  type:"single",
  options:["pyWorkPage contains only the data generated by the system while creating and processing a case","pyWorkPage contains all the case data generated while creating and processing a case","pyWorkPage contains only the data entered by users while creating and processing a case","pyWorkPage contains all the data pages accessed while creating and processing a case"],
  correct:[1],
  explanation:"pyWorkPage contains all case data generated while a case is created and processed."  
},
{
  id:54,
  section:"Pega",
  text:"In the Answer Area, select the Data Transform configuration that defaults the Quantity property value on a Purchase Request case to 1.",
  type:"single",
  options:["Set Quantity equal to 1","Set Quantity with value from .Quantity","Update Page with source 1","Apply Data Transform with source 1"],
  correct:[0],
  explanation:"The correct configuration sets Quantity with source equal to 1 to default the value."  
},
{
  id:55,
  section:"Pega",
  text:"A car insurance quote requires a view for potential customers to enter information to process the request. What are two primary decisions to make before you add fields to the view? (Choose Two)",
  type:"multi",
  options:["Is field entry required?","Does the field require a data source?","How do users enter values into the field?","Are processing actions applied to the field?"],
  correct:[0,2],
  explanation:"Before adding fields, decide whether entry is required and how users will enter values."  
},
{
  id:56,
  section:"Pega",
  text:"Which issue do you address by simulating a data source?",
  type:"multi",
  options:["You need to test a save plan for a savable data page that updates the cost of coverage options for insurance policies.","The product database moves to a new data source accessible by a web service that is not yet configured.","In production, the customer database needs to be taken off-line overnight for scheduled maintenance.","An Embedded data field needs simulated data for testing a customer creation view."],
  correct:[1,2],
  explanation:"Simulating a data source is used when the real external service is not yet configured for integration testing."  
},
{
  id:57,
  section:"Pega",
  text:"Which two statements about data records are true? (Choose Two)",
  type:"multi",
  options:["Data records are displayed in a drop-down list by default","Data records require external storage","Data records define permissible values of data fields","Data records are displayed in a searchable text field by default"],
  correct:[0,2],
  explanation:"Data records define permissible field values and are often displayed through searchable fields."  
},
{
  id:58,
  section:"Pega",
  text:"Which two data requirements ensure valid data? (Choose Two)",
  type:"multi",
  options:["The data is locally source","The data fits the business logic","The data is the correct type","The data is organized in a data type"],
  correct:[1,2],
  explanation:"Valid data must fit the business logic and be the correct type."  
},
{
  id:59,
  section:"Pega",
  text:"The retail store wants the application to process a new customer loyalty account. The customer enters their contact information, including name, email, phone number, and address. This information is displayed in a data relationship.",
  type:"single",
  options:["An Embedded data field","A Case reference data field","A Query field","A Data Reference field"],
  correct:[0],
  explanation:"Customer contact information displayed through a data relationship is modeled as a Data Reference field."  
},
{
  id:60,
  section:"Pega",
  text:"Which two items must be provided by the user to add an external data resource to a data object? (Choose Two)",
  type:"multi",
  options:["A simulated data source to test the implementation","A Data transform to map the Application data model to the connector","Authorizing information, if required by the corresponding service","The uniform resource identifier that identifies the web service"],
  correct:[2,3],
  explanation:"External data resources require authorizing information if needed and the URI identifying the service."  
},
{
  id:61,
  section:"Pega",
  text:"Which option follows best practices for naming a ruleset in Pega Platform?",
  type:"single",
  options:["Expense:01-02-05","Credit Check:03-01-02","Pega-Proj:01-04-01","Grand-Corporation-Human-Resources-Department:01-01-03"],
  correct:[0],
  explanation:"Expense:01-02-05 follows best practices without spaces or overly long keywords."  
},
{
  id:62,
  section:"Pega",
  text:"In an online retail application, the Order Receipt view displays a list of the products ordered, including product image, unit cost, and quantity. The total cost of the order is displayed at the bottom of the view.\nWhich two configurations on the Order Receipt view must be used together to display the required information as described? (Choose Two)",
  type:"multi",
  options:["Add the total cost outside the repeating dynamic layout.","Add the total cost inside the repeating dynamic layout.","Add a dynamic layout with an embedded repeating dynamic layout.","Add a repeating dynamic layout with embedded dynamic layouts."],
  correct:[0,3],
  explanation:"The order total belongs outside the repeating layout, and the view should use a repeating dynamic layout with embedded dynamic layouts."  
},
{
  id:63,
  section:"Pega",
  text:"In the Answer Area, select the appropriate accessibility role for each element.",
  type:"match",
  pairs:[
    {left:"Dropdown control",right:"Component/widget"},
    {left:"User instructions",right:"Document structure"},
    {left:"Navigation breadcrumbs",right:"Landmark"}
  ],
},
{
  id:64,
  section:"Pega",
  text:"You need to localize correspondence into a language that is unavailable in the Pega language pack. Which option satisfies the requirement?",
  type:"single",
  options:["Create the Translation rule manually and include the rule in the application ruleset.","Run the Localization wizard and add translations to Translation.html.","Configure a field value record that contains the correspondence text.","Leverage translation services SOAP calls and enable records for translation."],
  correct:[1],
  explanation:"To localize correspondence into an unavailable language, run the Localization wizard and add translations to Translation.html."  
},
{
  id:65,
  section:"Pega",
  text:"Which two control types allow you to display three balance transfer offers on a form with a single control, to prevent the customer from selecting more than one offer? (Choose Two)",
  type:"multi",
  options:["Button","Drop-down list","Radio buttons","Checkbox"],
  correct:[1,2],
  explanation:"Drop-down lists and radio buttons allow selection of only one offer from a single control."  
},
{
  id:66,
  section:"Pega",
  text:"University admission application cases automatically advance in the case life cycle if the applicant's standardized test scores are above a certain threshold. The threshold is determined each year based on the provided national average score. Which two configurations, when applied together, support this requirement? (Choose Two)",
  type:"multi",
  options:["Configure a process with a decision shape that continues if the TestThresholdConfiguration setting is less than the applicant's test score.","Configure a TestThreshold Configuration setting with the national average for the test score threshold.","Configure a TestThreshold Configuration setting that calculates the national average for the test score threshold.","Configure a process with a decision shape that continues if the TestThreshold Configuration setting is greater than the applicant's test score."],
  correct:[1,0],
  explanation:"You need a TestThreshold Configuration with the national average and a decision shape that continues when the applicant's score exceeds the threshold."  
},
{
  id:68,
  section:"Pega",
  text:"Đi thi có 1 câu cho 4 đáp án 2 bên và yêu cầu kéo thả cho mapping với nhau, mọi người chú ý chọn thế này nhé( chú ý chữ đậm )",
  type:"match",
  pairs:[
    {left:"Làm file security",right:"chọn PDF"},
    {left:"Ship đồ đến báo ngày giờ đến người order",right:"chọn Email"},
    {left:"Nhân viên chờ duyệt cấp trên duyệt gì đó",right:" chọn Approve"},
    {left:"Hệ thống giải quyết .....",right:"chọn Decision"}
  ],
},
{
  id:69,
  section:"Pega",
  text:"Có 1 câu hỏi về perfomance, nó cho 1 cái ảnh và nhiều rule, chọn 3 trong 4 đáp án. Chọn 3 cái có rule 3,4,5, tức là chọn 3 cái lớn nhất theo như trong ảnh. Nói đơn giản là tối ưu cái gì đó thì ưu tiên chọn mấy cái nhiều nhất có thể",
  type:"single",
  options:[
    "Thuộc chưa?",
  ],
  correct:[0],
  explanation:"Chọn 3 cái có rule 3,4,5, tức là chọn 3 cái lớn nhất theo như trong ảnh. Nói đơn giản là tối ưu cái gì đó thì ưu tiên chọn mấy cái nhiều nhất có thể"
},
{
  id:70,
  section:"Pega",
  text:"An online sales application supports both laptop and mobile devices. You are configuring the application skin and you notice the responsive layout in the mobile device is not displaying views as stakeholders require. Which two options allow you to resolve this situation without negatively impacting the laptop users? (Choose Two)",
  type:"multi",
  options:["Use the same application skin in all portals.","Update the process to give mobile users a separate portal.","Do not use a skin for the mobile application version.","Adjust the responsive behavior in the skin for optimal viewing in the mobile portal."],
  correct:[0,3],
  explanation:"Use the same skin across portals and adjust the responsive behavior for mobile so laptop users are not negatively impacted."  
},
{
  id:71,
  section:"Pega",
  text:"Có 1 câu hỏi là khi dự án ko đúng tiến độ thì liên lạc ai Chọn Scum master",
  type:"single",
  options:["Thuộc chưa?"],
  correct:[0],
  explanation:"Khi dự án ko đúng tiến độ thì liên lạc ai Chọn Scum master"  
},
{
  id:72,
  section:"Pega",
  text:"An online car parts business wants customers to find parts easily. You are asked to implement the following requirement: Customers must select a make, model, and year to initiate a vehicle-specific search.\nHow do you configure the data storage in the application to implement the requirement?",
  type:"single",
  options:["Configure a static list of the make, model, and year vehicles.","Configure a local data storage of the make, model, and year of the vehicle.","Configure a connection to a system of record using the External Database Mapping Wizard.","Configure a data page to store the make, model, and year data."],
  correct:[2],
  explanation:"Use the External Database Mapping Wizard to connect to a system of record for the vehicle data."  
},
{
  id:73,
  section:"Pega",
  text:"In a claims application, customers can file home insurance claims. Each claim contains a list of items of loss.\nDepending on circumstances, some claims are investigated for potential fraud in parallel to the actual claim process.\nWhich two entities would you model as case type? (Choose Two)",
  type:"multi",
  options:["Customer","Claim","Items of loss","Fraud investigation"],
  correct:[1,2],
  explanation:"Claim and Items of loss are the entities that are modeled as case types in this scenario."  
},
{
  id:74,
  section:"Pega",
  text:"In an Order case type, a percentage-based discount is automatically applied to a customer's order based on:\n-The number of years the customer has been a member\n-The membership type (Standard, Silver, or Gold)\nHow do you configure a Configuration setting to determine the discount?",
  type:"match",
  pairs:[
    {left:"Type",right:"Decimal"},
    {left:"Default value",right:"Calculated value from decision table"}
  ],
},
{
  id:75,
  section:"Pega",
  text:"Có 1 câu liên quan đến ugency, nó hỏi từ giai đoạn init, goal, deadline các thứ thì sau mỗi giai đoạn bao nhiêu gold thì điền 3 chỗ thứ tự lần lượt là 30,40,50",
  type:"single",
  options:["Thuộc chưa?"],
  correct:[0],
  explanation:"Hỏi từ giai đoạn init, goal, deadline các thứ thì sau mỗi giai đoạn bao nhiêu gold thì điền 3 chỗ thứ tự lần lượt là 30,40,50"
},
{
  id:76,
  section:"Pega",
  text:"Match the requirement with the correct data page configuration.",
  type:"match",
  pairs:[
    {left:"Flight status and information remain current each time a customer accesses their reservation.",right:"Configure a property to refer to a data page"},
    {left:"Item quantity and pricing must be captured at the time an order is placed and do not update when the case is accessed later.",right:"Configure a property to copy data from a data page"},
    {left:"Customers must see all of the available mortgage options, but only the selected option is recorded as a part of the case.",right:"Configure a UI control to source data from a data page"}
  ],
},
{
  id:77,
  section:"Pega",
  text:"Match each item with the correct page type.",
  type:"match",
  pairs:[
    {left:"Current order",right:"Data pages"},
    {left:"Customer information",right:"User pages"},
    {left:"Previous orders",right:"System pages"}
  ],
},
{
  id:78,
  section:"Pega",
  text:"Match each event with its execution order when a customer submits payment.",
  type:"match",
  pairs:[
    {left:"A user clicks the button.",right:"1"},
    {left:"The order ID value is set to the value of the confirmation number if the system confirms the payment.",right:"4"},
    {left:"The system applies a data transform.",right:"3"},
    {left:"The system refreshes the section.",right:"2"},
  ],
},

{
  id:79,
  section:"Pega",
  text:"In a customer registration case type, users must enter the name, email, address, and ______ in a data object. What field type do you configure to reference this information?",
  type:"single",
  options:["Data reference","Embedded data","Query","User reference"],
  correct:[1],
  explanation:"Embedded data is used when the user enters fields like name, email, and address directly into a data object."  
},
{
  id:80,
  section:"Pega",
  text:"There are two lines of business for a company with different branding requirements. Both customers and CSR must be provided with mobile channel access for the application. What of the following effects increases the number of different mobile channels? (Choose Two)",
  type:"multi",
  options:["Using different color pallets","Customer and CSR can initiate different case types","Mobile channels can be accessible by both tabs and mobile phones","Have to localize based on Date/Time Zone, local language of the operator"],
  correct:[0,1],
  explanation:"Different mobile channels can be created by using different color palettes and allowing customer and CSR to initiate different case types.\nNếu bảo chọn 2 thì là A, B, chọn 1 thì phải chọn A. Using diffirent color pallets "  
},

{
  id:81,
  section:"Pega",
  text:"Which of the following situations would you have to simulate data?",
  type:"single",
  options:["Product database is moved to another source from a webservice which is not yet configured","In testing environment application needs to be tested without exposing client data","In production make the database offline for maintenance purposes"],
  correct:[0],
  explanation:"Simulating a data source is appropriate when the external web service is not yet configured for integration testing."  
},
{
  id:82,
  section:"Pega",
  text:"A car insurance quote requires a view for potential customers to enter information to process the request. What are two primary decisions to make before you add fields to the view? (Choose Two)",
  type:"multi",
  options:["Is field entry required?","How do users enter values into the field?","Does the field require a data source?","Are processing actions applied to the field?"],
  correct:[0,1],
  explanation:"Decide whether entry is required and how users will enter values before adding fields to a view."  
},
{
  id:83,
  section:"Pega",
  text:"What are the two correct statements about data types?",
  type:"multi",
  options:["When creating data objects from App Studio, the data type is created in Dev Studio","Data types can have fields by inheritance","Data types always require external storage","Data types cannot be modified after creation"],
  correct:[0,1],
  explanation:"When creating data objects from App Studio the data type is created in Dev Studio, and data types can inherit fields."  
},
{
  id:84,
  section:"Pega",
  text:"For an approve/reject step, the approver needs to approve from email and mobile phone. How can this be configured?",
  type:"single",
  options:["Configure mobile approval and send email step","Enable push notification and send email","Add a manual approval task","Use a third-party approval gateway"],
  correct:[1],
  explanation:"Enabling push notifications plus sending an email allows approvers to act from mobile and email."  
},
{
  id:85,
  section:"Pega",
  text:"You are designing a case type that includes a process to perform when a case is rejected. How do you model this requirement in the case life cycle?",
  type:"single",
  options:["Add a primary stage and add the rejection process to the stage.","Add an alternate stage and add the rejection process as an optional process to the stage.","Add an alternate stage and add the rejection process to the stage.","Add the rejection process to all the primary stages as an optional process.","Function"],
  correct:[2],
  explanation:"Add an alternate stage and include the rejection process in that stage to model a rejection flow."  
},
{
  id:86,
  section:"Pega",
  text:"You have created a series of forms for a vacation booking process. Declarative expressions are used to calculate values such as the cost of the flight, hotel, car rental, and taxes. The last form includes a field that displays the total amount that will be charged on the user's credit card. How do you configure the calculations so that the total amount is calculated only when the user reaches the last form?",
  type:"single",
  options:["Use the backward chaining option for all the expressions.","Use the backward chaining option for the total amount expression. Use forward chaining for all the other expressions.","Use the forward chaining option for all the expressions.","Use the forward chaining option for the total amount expression. Use backward chaining for all the other expressions."],
  correct:[1],
  explanation:"Backward chaining for the total amount ensures it is evaluated on demand (when accessed on the last form), while other expressions can use forward chaining."  
},
{
  id:87,
  section:"Pega",
  text:"You have been asked to create a sequence of user forms for a travel reservation process. The forms contain fields that require calculation. For which reason do you use a declare expression to calculate values?",
  type:"single",
  options:["To perform the calculation in a specific case stage","To perform the calculation when the user clicks a button","To perform the calculation when a form is submitted","To perform the calculation wherever a field is updated"],
  correct:[3],
  explanation:"Declare expressions recalculate automatically whenever referenced fields are updated, so use them to perform calculations whenever a field changes."  
},
{
  id:88,
  section:"Pega",
  text:"A Service Request case type has a CustomerGrade property. How do you set the value of the CustomerGrade property to Silver when a service request case is created?",
  type:"single",
  options:["Configure the CustomerGrade property with a default value.","Configure the pyDefault data transform to set the CustomerGrade property value.","Configure a declare expression to set the CustomerGrade property value.","Configure the first connector in the first flow rule to set the CustomerGrade property value."],
  correct:[1],
  explanation:"Use the pyDefault data transform to set initial property values when a case is created."  
},
{
  id:89,
  section:"Pega",
  text:"In an application, three email addresses (work, home, and other) can be captured for a customer. You use .Email (work) to refer to the work email address. What type of property is used to capture the email addresses?",
  type:"single",
  options:["Page","Value group","Value list","Page group"],
  correct:[1],
  explanation:"A value group groups related scalar properties like multiple email addresses under one parent."  
},
{
  id:90,
  section:"Pega",
  text:"ABC Corp requires that expenses billable to a client are reviewed by an auditor in the Finance department. After the auditor approves the expenses, the client is billed. You create the work party for the auditor as an instance of which class?",
  type:"single",
  options:["Data-Party-Org","Data-Party-Operator","Data-Party-Com","Data-Party-Person"],
  correct:[1],
  explanation:"The auditor role is represented by a Data-Party-Operator (an operator/work party) instance."  
},
];
