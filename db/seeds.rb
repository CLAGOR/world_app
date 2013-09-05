countries = [
    {name: "kazachstan", coordinates: "545,114,576,114,574,105,594,100,616,104,646,119,638,138,610,143,596,141,572,132,568,145,557,137,562,133,559,129,552,129,541,122,543,116,544,116"},
    {name: "greenland", coordinates: "298,25,376,46"}
]

countries.each do |country|
  Country.where(country).first_or_create
end
