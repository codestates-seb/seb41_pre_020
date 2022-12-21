package com.y2k.stackoverflow.comment.repository;

import com.y2k.stackoverflow.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;


public interface CommentRepository extends JpaRepository<Comment, Long> {

}
