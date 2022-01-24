FactoryBot.define do
  factory :user do
    id { 1 }
    email { 'test@user.com' }
    name { 'tester' }
    password { 'qwerty' }
    # Add additional fields as required via your User model
  end

  # Not used in this tutorial, but left to show an example of different user types
  # factory :admin do
  #   id {2}
  #   email {"test@admin.com"}
  #   name {"tester2"}
  #   password {"qwerty"}
  #   admin {true}
  # end
end
