class AddCoordinatesToCountries < ActiveRecord::Migration
  def change
    add_column :countries, :coordinates, :string
  end
end
