package mk.finki.ukim.taskmenager.repository;

import mk.finki.ukim.taskmenager.model.Task;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
}
