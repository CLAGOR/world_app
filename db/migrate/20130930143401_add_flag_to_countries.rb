class AddFlagToCountries < ActiveRecord::Migration
  def change
    add_column :countries, :flag, :binary
    add_column :countries, :continent, :string
    add_column :countries, :area, :string
    add_column :countries, :language, :string
  end
end
