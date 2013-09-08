namespace :heroku do
  task set_vars: :environment do
    `heroku config:set HEROKU_DB=#{ENV["HEROKU_DB"]}`
    `heroku config:set HEROKU_DB_USER=#{ENV["HEROKU_DB_USER"]}`
    `heroku config:set HEROKU_DB_PASS=#{ENV["HEROKU_DB_PASS"]}`
  end
end