package com.BlueFlagGreekBeaches.entity;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToMany;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Category
{
    @Id
    @GeneratedValue(strategy = GenerationType.UUID) // Instructs that a UUID for the entity should be generated automatically for us by the persistence provider.
    @Column(name = "id", nullable = false)
    private UUID id;

    @Column(name = "category_id", nullable = false)
    private int categoryId;

    @Column(name = "name", nullable = false)
    private String name;

    @ManyToMany(mappedBy = "categories")
    private List<PointOfInterest> pointsOfInterest = new ArrayList<>();

    public Category(int categoryId ,String name)
    {
        this.categoryId = categoryId;
        this.name = name;
    }
}
