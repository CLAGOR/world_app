namespace :db do
  namespace :clear do
    task all: [:environment, :countries]

    task countries: :environment do
      Country.delete_all
    end
  end
end