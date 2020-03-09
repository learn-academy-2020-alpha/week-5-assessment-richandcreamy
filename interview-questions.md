# ASSESSMENT 5: Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own there is always something more to learn.   

1. Rails follows an MVC pattern. What does that mean?

  Your answer: Model -> View -> Controller cycle, not to be confused with Minimal Viable Product

  Researched answer: The MVC pattern, in a nutshell, is this:

The model represents the data, and does nothing else. The model does NOT depend on the controller or the view.

The view displays the model data, and sends user actions (e.g. button clicks) to the controller. The view can: be independent of both the model and the controller; or actually be the controller, and therefore depend on the model. The controller provides model data to the view, and interprets user actions such as button clicks. The controller depends on the view and the model. In some cases, the controller and the view are the same object.

Rule 1 is the golden rule of MVC so I'll repeat it:
The model represents the data, and does nothing else. The model does NOT depend on the controller or the view.



2. What is a gem?

  Your answer: Ruby packages you can install.

  Researched answer: RubyGems is a package manager for the Ruby programming language that provides a standard format for distributing Ruby programs and libraries (in a self-contained format called a "gem"), a tool designed to easily manage the installation of gems, and a server for distributing them.



3. Why is it important to have validations in your application?

  Your answer: Validate your data so that your databse stays clean and you don't get hacked or drop tables. https://www.xkcd.com/327/

  Researched answer: Validations are used to ensure that only valid data is saved into your database. For example, it may be important to your application to ensure that every user provides a valid email address and mailing address. Model-level validations are the best way to ensure that only valid data is saved into your database. They are database agnostic, cannot be bypassed by end users, and are convenient to test and maintain. Rails makes them easy to use, provides built-in helpers for common needs, and allows you to create your own validation methods as well.



4. Describe a possible relationship between a model called Person and a model called Computer. Based on your description, which model would hold the foreign key?

  Your answer: A person can have many computers. Since many computer devices belongs to a user, I would organize my schema so that the foriegn keys would be in the computer table table. 

  Researched answer: I'm not sure how to research this one since I'm the one designing this project. From the research I've conducted, you really need to start planning out models when you start having more than 2 tables. This seems like a good tip to note though.
  
  "You should definitely use one model per table in order to take advantage of all the ActiveRecord magic.

But you could also group your models together into namespaces using modules and sub-directories, in order to avoid having to manage 70 files in your models directory.

For example, you could have:

app/models/admin/user.rb
app/models/admin/group.rb
for models Admin::User and Admin::Group, and

app/models/publishing/article.rb
app/models/publishing/comment.rb
for Publishing::Article and Publishing::Comment

And so forth..."



5. What is object-relational mapping?

  Your answer: ORM allows for 2 different programming languages to pass objects between them despite being 2 different languages.

  Researched answer: Object-relational mapping (ORM, O/RM, and O/R mapping tool) in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language. There are both free and commercial packages available that perform object-relational mapping, although some programmers opt to construct their own ORM tools.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.
- RESTful routes

A RESTful route is a route that provides mapping between HTTP verbs (get, post, put, delete, patch) to controller CRUD actions (create, read, update, delete). Instead of relying solely on the URL to indicate what site to visit, a RESTful route also depends on the HTTP verb and the URL.

- json

Javascript Object Notation
JavaScript Object Notation is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types (or any other serializable value)

- API

Application Programming Interface

An application programming interface (API) was originally understood to be an application specific computing interface exposed by a particular software program or operating system to allow third parties to extend the functionality of that software application beyond its capabilities as they existed out of the box.

- Endpoints

A WSDL document defines services as collections of network endpoints, or ports. In WSDL, the abstract definition of endpoints and messages is separated from their concrete network deployment or data format bindings. This allows the reuse of abstract definitions: messages, which are abstract descriptions of the data being exchanged, and port types which are abstract collections of operations. The concrete protocol and data format specifications for a particular port type constitutes a reusable binding. A port is defined by associating a network address with a reusable binding, and a collection of ports define a service.

- Strong params

Strong Parameters
It provides an interface for protecting attributes from end-user assignment. This makes Action Controller parameters forbidden to be used in Active Model mass assignment until they have been explicitly enumerated.