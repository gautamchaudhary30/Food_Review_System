package dev.tariq.Food;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodService {

    @Autowired
    private FoodRepository foodRepository;
  public List<Food> allFood(){
      return  foodRepository.findAll();
  }

  public Optional<Food> singleFood(String imdbId) {

      return foodRepository.findMovieByImdbId(imdbId);
    }

  }
