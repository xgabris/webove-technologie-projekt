$(document).ready(function() {
    $.ajax({
        url: "library_data.xml",
        type: "GET",
        dataType: "xml",
        success: function(xml) {
            updateTable(xml);
        },
        error: function() {
            alert("Nepodarilo sa načítať dáta");
        }
    });
});

function updateTable(xml) {
    var table = "<tr><th>Titul</th><th>Autor</th><th>Rok</th><th>Sekcia</th><th>Oddelenie</th></tr>";
    var departments = $(xml).find("department");

    departments.each(function() {
        var departmentName = $(this).attr("name");
        var sections = $(this).find("section");

        sections.each(function() {
            var sectionName = $(this).attr("name");
            var books = $(this).find("book");

            books.each(function() {
                table += "<tr><td>" +
                $(this).find("title").text() +
                "</td><td>" +
                $(this).find("author").text() +
                "</td><td>" +
                $(this).find("year").text() +
                "</td><td>" +
                sectionName +
                "</td><td>" +
                departmentName +
                "</td></tr>";
            });
        });
    });

    $("#libraryTable").html(table);
}
