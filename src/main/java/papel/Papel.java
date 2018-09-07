package papel;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;

import avaliacaopapel.AvaliacaoPapel;

@Entity
@Table(name = "papel")
@Getter @Setter
public  class Papel extends CrudClass {

	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String descricao;
	
	@ManyToOne
	@JoinColumn(name="id_avaliacao_papel",nullable=true)
	@JsonView(Views.Public.class)
	private AvaliacaoPapel avaliacaoPapel;


}
