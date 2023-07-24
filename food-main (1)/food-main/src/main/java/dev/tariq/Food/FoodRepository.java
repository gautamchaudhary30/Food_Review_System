package dev.tariq.Food;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FoodRepository extends MongoRepository<Food, ObjectId> {
    Optional<Food> findMovieByImdbId(String imdbId);
}
