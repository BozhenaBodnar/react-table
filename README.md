# React People Table - Filtering and Sorting

 [DEMO](https://bozhenabodnar.github.io/react-table/)

 This project is an extension of the React People Table example, adding the ability to filter and sort people in the table. The filters and sort parameters are saved as URL search parameters, allowing you to share the link and reproduce the exact view.

## Implementation Details

Saving Filters and Sort Params

The URLSearchParams API is used to handle URL search parameters. Whenever a filter or sort option changes, the corresponding search parameters are updated using the set method of the URLSearchParams object.
Keeping Search Params When Navigating

When loading the People page or selecting a person, the search parameters are retrieved from the URL, ensuring that the filter and sort states are preserved.
Displaying Sidebar Filters

The sidebar filters are rendered conditionally based on the presence of loaded people data. This ensures that the filters are only displayed when the people data is available.
NameFilter

    An input field is provided in the sidebar for the name filter.
    Changes in the input field are captured using an event handler.
    The query search parameter is updated with the text from the input field using the set method of the URLSearchParams object.
    The filter is applied by performing a case-insensitive search on the name, motherName, and fatherName fields.
    If the input field is empty, the query search parameter is removed from the URL using the delete method of the URLSearchParams object.

CenturyFilter

    Multiple centuries or all of them can be selected using checkboxes or similar input elements.
    Event handlers are attached to capture the changes in the selected centuries.
    The centuries are added as search parameters using the append method of the URLSearchParams object.
    The selected centuries are retrieved from the URL using the getAll method of the URLSearchParams object.

Sorting

    Clickable arrows are added to the table headers of the sortable columns (name, sex, born, and died).
    Clicking on a column header triggers the sorting functionality.
    On the first click, people are sorted in ascending order based on the selected field (a -> z or 0 -> 9).
    On the second click, the sorting order is reversed.
    On the third click, sorting is disabled.
    The sort field is saved in the URL search parameters using the set method of the URLSearchParams object.
    If the sorting order is reversed, the order=desc parameter is added.
    If sorting is disabled, the sort and order parameters are removed from the URL.

Usage

    Clone the repository and navigate to the project directory.
    Run npm install to install the dependencies.
    Run npm start to start the development server.
    Access the application in your browser at http://localhost:3000.
    Use the provided input fields, checkboxes, and table headers to filter and sort the people data.
    The changes in filters and sort options will be reflected in the URL search parameters.
    You can share the URL to showcase the same filtered and sorted view.

Note: The sorting and filtering tests are not implemented in this example.

## Conclusion

By adding filtering and sorting functionality to the React People Table, you can now easily filter the people based on name and select specific centuries. Additionally, sorting the table columns allows you to view the data in ascending or descending order. The use of URL search parameters ensures that the filter and sort states are maintained when navigating within the People page or sharing the link with others. Feel free to explore and enhance this project further based on your specific requirements.