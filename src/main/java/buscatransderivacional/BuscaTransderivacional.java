package buscatransderivacional;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;

@Entity
@Table(name = "buscatransderivacional")
@Getter @Setter
public  class BuscaTransderivacional extends CrudClass {

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String titulo;
	
	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private int resolvido;
	
	@JsonView(Views.Public.class)
	@Column( length = 100000 )
	private String respostas;
	

}
