# Generic Styles

<p class="lead">Here are the generic styles that will be used and re-used accross the NorthPine Land web portal.</p>

---

## How to Use

Using this framework is easy. Here's how your code will look when you use a series of <div> tags to create vertical columns.

```html
<div class="row">
  <div class="small-6 medium-4 large-3 columns">...</div>
  <div class="small-6 medium-8 large-9 columns">...</div>
</div>
```

<div class="row display">
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-4 columns">4</div>
</div>
<div class="row display">
  <div class="small-12 large-3 columns">3</div>
  <div class="small-12 large-6 columns">6</div>
  <div class="small-12 large-3 columns">3</div>
</div>
<div class="row display">
  <div class="small-12 large-2 columns">2</div>
  <div class="small-12 large-8 columns">8</div>
  <div class="small-12 large-2 columns">2</div>
</div>
<div class="row display">
  <div class="small-12 large-3 columns">3</div>
  <div class="small-12 large-9 columns">9</div>
</div>
<div class="row display">
  <div class="small-12 large-4 columns">4</div>
  <div class="small-12 large-8 columns">8</div>
</div>
<div class="row display">
  <div class="small-12 large-5 columns">5</div>
  <div class="small-12 large-7 columns">7</div>
</div>
<div class="row display">
  <div class="small-12 large-6 columns">6</div>
  <div class="small-12 large-6 columns">6</div>
</div>

---

## Nesting Rows

In the Grid you can nest columns down as far as you'd like. Just embed rows inside columns and go from there. Each embedded row can contain up to 12 columns.

```html
<div class="row">
  <div class="small-8 columns">8
    <div class="row">
      <div class="small-8 columns">8 Nested
        <div class="row">
          <div class="small-8 columns">8 Nested Again</div>
          <div class="small-4 columns">4</div>
        </div>
      </div>
      <div class="small-4 columns">4</div>
    </div>
  </div>
  <div class="small-4 columns">4</div>
</div>
```

<div class="row display">
  <div class="small-8 columns">8
    <div class="row">
      <div class="small-8 columns">8 Nested
        <div class="row">
          <div class="small-8 columns">8 Nested Again</div>
          <div class="small-4 columns">4</div>
        </div>
      </div>
      <div class="small-4 columns">4</div>
    </div>
  </div>
  <div class="small-4 columns">4</div>
</div>

---

## Small Grid

As you've probably noticed in the examples above, you have access to a small, medium, and large grid. If you know that your grid structure will be the same for small devices as it will be on large devices, just use the small grid. You can override your small grid classes by adding medium or large grid classes.

```html
<div class="row">
  <div class="small-2 columns">2</div>
  <div class="small-10 columns">10, last</div>
</div>
<div class="row">
  <div class="small-3 columns">3</div>
  <div class="small-9 columns">9, last</div>
</div>
```

<div class="row display">
  <div class="small-2 columns">2</div>
  <div class="small-10 columns">10, last</div>
</div>
<div class="row display">
  <div class="small-3 columns">3</div>
  <div class="small-9 columns">9, last</div>
</div>



# Colors

<p class="lead">Below you can find the different values we created that support the primary color variable you can change at any time in <code>src\scss\_variables.scss</code></p>

---

<div class="row up-1 medium-up-3 large-up-3">
  <div class="column">
    <div class="color-block">
      <span style="background: #393db3"></span>
      #393db3
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #2e3192"></span>
      #2e3192
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #252874"></span>
      #252874
    </div>
  </div>
  
  <div class="column">
    <div class="color-block">
      <span style="background: #a5a09f"></span>
      #a5a09f
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #8f8b8a"></span>
      #8f8b8a
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #7e7a7a"></span>
      #7e7a7a
    </div>
  </div>

  <div class="column">
    <div class="color-block">
      <span style="background: #e4e0df"></span>
      #e4e0df
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #d6d1cd"></span>
      #d6d1cd
    </div>
  </div>
  <div class="column">
    <div class="color-block">
      <span style="background: #baaca3"></span>
      #baaca3
    </div>
  </div>
</div>



# Typography

<p class="lead">This design uses Arial for headings and paragraph text.</p>

---

## Headings

Headings are used to denote different sections of content, usually consisting of related paragraphs and other HTML elements. They range from h1 to h6 and should be styled in a clear hierarchy (i.e., largest to smallest)

---

## Paragraphs

Paragraphs are groups of sentences, each with a lead (first sentence) and transition (last sentence). They are block level elements, meaning they stack vertically when repeated. Use them as such.

---

<h1>Heading Level 1</h1>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h2>Heading Level 2</h2>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h3>Heading Level 3</h3>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h4>Heading Level 4</h4>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h5>Heading Level 5</h5>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.

<h6>Heading Level 6</h6>

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quibusdam ratione sunt dolorum, qui illo maxime doloremque accusantium cum libero eum, a optio odio placeat debitis ullam aut non distinctio.



# Buttons

<p class="lead">Buttons are tied to an action of some kind, whether that button is on a cheese dispenser or launches the rocket that you're strapped to. On the web, we follow similar conventions.</p>

---

## Primary Buttons

These buttons are primary calls to action and should be used sparingly. Their size can be adjusted with the `.tiny`, `.small`, and `.large` classes.

```html_example
<a href="#" class="primary large button nli-btns--primary">Large button</a>
<a href="#" class="primary button nli-btns--primary">Regular button</a>
<a href="#" class="primary small button nli-btns--primary">Small button</a>
<a href="#" class="primary tiny button nli-btns--primary">Tiny button</a>
```

---

## Secondary Buttons

These buttons are used for less important, secondary actions on a page.

```html_example
<a href="#" class="secondary large button nli-btns--secondary">Large button</a>
<a href="#" class="secondary button nli-btns--secondary">Regular button</a>
<a href="#" class="secondary small button nli-btns--secondary">Small button</a>
<a href="#" class="secondary tiny button nli-btns--secondary">Tiny button</a>
```



# Forms

<p class="lead">Use forms to allow users to interact with the site and provide information to the company.</p>

---

## Elements of a Form

A form should be marked up using its default HTML properties. The ones we make use of include (in hierarchical order):

- Form
- Label
- Input
- Select
- Text area
- Button

---

## How to Use

Make forms great and easy to use with the following rules:

- Wrap checkboxes and radio buttons within labels for larger hit areas, and be sure to set the for, name, and id attributes for all applicable elements.
- Series of checkboxes and radio buttons below within a `<ul class="inline-list">`.
- Before selecting any set of fields to use for a required input, explore other options (e.g., radio buttons over select lists).

---

## Learn All About Forms

Check out the [Foundation Docs](http://foundation.zurb.com/sites/docs) to learn about how flexible our forms are for creating different layouts. It works perfectly with the grid to meet all your form needs.

---

## Form Layouts

Form elements in Foundation are styled based on their type attribute rather than a class. Inputs in Foundation have another major advantage — they are full width by default. That means that inputs will run as wide as the column that contains them. However, you have two options which make these forms extremely versatile:

- You can size inputs using column sizes, like `.medium-6`, `.small-6`.
- You can create row elements inside your form and use columns for the form, including inputs, labels and more. Rows inside a form inherit some special padding to even up input spacing.

---

## Form Example

```html_example
<form>
  <div class="row">
    <div class="large-12 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Label</label>
      <input type="text" placeholder="placeholder">
    </div>
    <div class="large-6 columns">
      <div class="row collapse">
        <label>Label</label>
        <div class="input-group">
          <input class="input-group-field" type="text" placeholder="placeholder">
          <span class="input-group-label">.com</span>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Select Box</label>
      <select>
        <option value="good">Good</option>
        <option value="better">Better</option>
        <option value="best">Best</option>
      </select>
    </div>
  </div>
  <div class="row">
    <div class="large-6 columns">
      <label>Choose Your Favorite</label>
      <input type="radio" name="radio1" value="radio1" id="radio1"><label for="radio1">Red</label>
      <input type="radio" name="radio2" value="radio2" id="radio2"><label for="radio2">Blue</label>
    </div>
    <div class="large-6 columns">
      <label>Check these out</label>
      <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
      <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
    </div>
  </div>
  <div class="row">
    <div class="large-12 columns">
      <label>Textarea Label</label>
      <textarea placeholder="placeholder"></textarea>
    </div>
  </div>
</form>
```



# Reusable Components



# Title Section

Displays the title of the current page.

```html_example
<div class="yondu-container">
  <div class="row">
    <div class="medium-6 small-6 columns">
      <h3>Current page title goes here</h3>
    </div>
    <div class="medium-6 small-6 columns end text-right">
      <button type="button" class="button nli-btns--secondary">Add Activity</button>
    </div>
  </div>
</div>
```



# Filter Search

Displays the filter section for a recordset. The section also occupies the width of its parent container.

```html_example
<div class="yondu-container">
  <div class="yondu yondu-filter row">
      <div id="yondu-filter--reponsive" class="yondu-filter--left medium-9 small-12 columns">
        <div data-responsive-toggle="yondu-filter--reponsive">
          <button class="close-button yondu-filter__btn--hide" aria-label="Close menu" type="button" data-toggle>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="medium-1 small-12 columns">
          <label for="yondu-category" class="middle">Filter</label>
          <!-- Close button -->
        </div>
        <div class="medium-3 small-12 columns">
          <select name="" id="yondu-category" class="selectpicker yondu-form yondu-form--min form-control yondu-filter__category">
            <option value="none" selected>-</option>
            <option value="text">Creator</option>
            <option value="dropdown">Status</option>
            <!-- <option value="date">Date</option> -->
            <!-- <option value="daterange">Date Range</option> -->
          </select>
        </div>
        <div class="medium-4 small-12 columns">
          <label for="" class="yondu-filter__type text-right middle" data-filter-type="none">No filter applied</label>
          <input type="text" class="form-control yondu-form yondu-form--min yondu-filter__type" data-filter-type="text" placeholder="Search here">
          <select name="" id="" class="selectpicker yondu-form yondu-form--min form-control yondu-filter__type" data-filter-type="dropdown">
            <option value="">Option 1</option>
            <option value="">Option 2</option>
            <option value="">Option 3</option>
            <option value="">Option 4</option>
            <option value="">Option 5</option>
          </select>

          <div class="yondu-filter__type yondu-filter__type--date" data-filter-type="daterange">
            <div class='yondu-filter__date' data-role="from">
              <input type='text' class="form-control yondu-form yondu-form--min" placeholder="From" />
              <span class="input-group-addon">
                <span class="glyphicon glyphicon-calendar"></span>
              </span>
            </div>
            <div class='yondu-filter__date' data-role="to">
              <input type='text' class="form-control yondu-form yondu-form--min" placeholder="To" />
              <span class="input-group-addon">
                <span class="glyphicon glyphicon-calendar"></span>
              </span>
            </div>
          </div>

          <div class="yondu-filter__type yondu-filter__type--date" data-filter-type="date">
            <div class='yondu-filter__date'>
              <input type='text' class="form-control yondu-form yondu-form--min" placeholder="Select Date" />
              <span class="input-group-addon">
                <span class="glyphicon glyphicon-calendar"></span>
              </span>
            </div>
          </div>
        </div>
        
        <div class="medium-4 small-12 columns">
          <button type="button" class="button medium-6 small-6 columns nli-btns--primary yondu-filter__btn--search" data-callback="ajax_function_here">Search</button>
          <button type="button" class="button medium-6 small-6 columns nli-btns--secondary yondu-filter__btn--clear">Clear</button>
        </div>
      </div>


      <div class="small-6 columns yondu-filter--center" data-responsive-toggle="yondu-filter--reponsive" data-hide-for="medium">
        <div class="small-12 columns">
          <button type="button" class="button nli-btns--primary expanded yondu-filter__btn--show" data-toggle>Show Filter</button>
        </div>
      </div>

      <div class="medium-3 small-6 columns yondu-filter--right">
        <div class="medium-6 small-5 columns">
          <label for="" class="text-right middle">Entries</label>
        </div>
        <div class="medium-6 small-7 columns">
          <select name="" id="" class="selectpicker yondu-form yondu-form--min form-control yondu-filter__entries yondu-filter__last">
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>

  </div>
</div>
```



# Table Data

A grid based table used to display tabular data. Useful for listing records.

```html_example
<div class="yondu-container row">
  <table class="yondu-table">
    <thead>
      <tr>
        <th>Column A</th>
        <th>Column B</th>
        <th>Column C</th>
        <th>Column D</th>
        <th>Column E</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td title="Column A">Record 1 A</td>
        <td title="Column B">Record 1 B</td>
        <td title="Column C">Record 1 C</td>
        <td title="Column D">Record 1 D</td>
        <td title="Column E" class="yondu-table__action">
          <span class="yondu-table__action__button" data-toggle="record1"><i class="fa fa-ellipsis-v"></i></span>
          <ul id="record1" class="yondu-table__action__buttons" data-toggler=".expanded">
            <li><a href="#" title="view"><i class="fa fa-search"></i></a></li>
            <li><a href="#" title="edit"><i class="fa fa-pencil"></i></a></li>
            <li><a href="#" title="delete"><i class="fa fa-remove"></i></a></li>
          </ul>
        </td>
      </tr>
      <tr>
        <td title="Column A">Record 2 A</td>
        <td title="Column B">Record 2 B</td>
        <td title="Column C">Record 2 C</td>
        <td title="Column D">Record 2 D</td>
        <td title="Column E" class="yondu-table__action">
          <span class="yondu-table__action__button" data-toggle="record2"><i class="fa fa-ellipsis-v"></i></span>
          <ul id="record2" class="yondu-table__action__buttons" data-toggler=".expanded">
            <li><a href="#" title="view"><i class="fa fa-search"></i></a></li>
            <li><a href="#" title="edit"><i class="fa fa-pencil"></i></a></li>
            <li><a href="#" title="delete"><i class="fa fa-remove"></i></a></li>
          </ul>
        </td>
      </tr>
      <tr>
        <td title="Column A">Record 3 A</td>
        <td title="Column B">Record 3 B</td>
        <td title="Column C">Record 3 C</td>
        <td title="Column D">Record 3 D</td>
        <td title="Column E" class="yondu-table__action">
          <span class="yondu-table__action__button" data-toggle="record3"><i class="fa fa-ellipsis-v"></i></span>
          <ul id="record3" class="yondu-table__action__buttons" data-toggler=".expanded">
            <li><a href="#" title="view"><i class="fa fa-search"></i></a></li>
            <li><a href="#" title="edit"><i class="fa fa-pencil"></i></a></li>
            <li><a href="#" title="delete"><i class="fa fa-remove"></i></a></li>
          </ul>
        </td>
      </tr>
      <tr>
        <td title="Column A">Record 4 A</td>
        <td title="Column B">Record 4 B</td>
        <td title="Column C">Record 4 C</td>
        <td title="Column D">Record 4 D</td>
        <td title="Column E" class="yondu-table__action">
          <span class="yondu-table__action__button" data-toggle="record4"><i class="fa fa-ellipsis-v"></i></span>
          <ul id="record4" class="yondu-table__action__buttons" data-toggler=".expanded">
            <li><a href="#" title="view"><i class="fa fa-search"></i></a></li>
            <li><a href="#" title="edit"><i class="fa fa-pencil"></i></a></li>
            <li><a href="#" title="delete"><i class="fa fa-remove"></i></a></li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```



# View Details Page

View in-depth details about a page and / or a record.

```html_example

```



# Form

Form elements styled for NorthPine.

```html_example

```



# Modal

NLI Portal utilizes modals to it's advantage. Making almost anything appear in modal form for faster data load and display.

```html_example

```



# Modal - View List

A combination of Tabular data inside a modal.

```html_example

```



# Modal - View Image

View an Image inside a modal

```html_example

```



# Modal - View Document

Render documents like PDF inside a modal

```html_example

```



# Modal - Confirmation

Modal is used to express confirmation / notification messages inside the portal.

```html_example

```



# Modal - Upload Batch

Utilized as an uploader function

```html_example

```