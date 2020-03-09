# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

rails new app_name -d postgresql -T

2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - read from
library - the library table
:id - with this primary key
book - the book that belongs based to this key
show - in the column show

3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

Oh no, why didn't you generate the foreign key at the same time? Create a migration to update your database. 

I've heard this is in the syllabus but could not find it. This is the line listed for this "It is an easy mistake to forget a foreign key. It is also a common beginner mistake to mislabel the column or to make a mistake when assigning the data type. If this happens, migrations are your friend. Create a migration to update your database."

I did find this guide though. "add_foreign_key :contents, :projects, column: :project_id, #primary_key: "id""
https://stackoverflow.com/questions/56454515/is-there-a-way-to-change-column-to-foreign-key



4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

$ rails generate model Person shirt:string pants:string shoes:string
$ rails db:migrate



5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

class Person < ApplicationRecord
  validates :shirt, :pants, :shoes, presence: true
end