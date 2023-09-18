package project.DoitDoit.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.DoitDoit.entity.BoardEntity;

public interface BoardRepository extends JpaRepository<BoardEntity, Long>{
}
