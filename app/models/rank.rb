class Rank < ApplicationRecord
  validates :time, presence: true
  validates :nickname, presence: true
end
