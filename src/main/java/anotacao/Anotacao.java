package anotacao;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;

@Entity
@Table(name = "anotacao")
@Getter @Setter
public  class Anotacao extends CrudClass {
	
	@JsonView(Views.Public.class)
	private String titulo;
	
	@JsonView(Views.Public.class)
	private String categoria;

	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String descricao;

}
