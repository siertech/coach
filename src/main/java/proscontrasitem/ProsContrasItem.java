package proscontrasitem;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import lombok.Getter;
import lombok.Setter;
import proscontras.ProsContras;

import com.fasterxml.jackson.annotation.JsonView;
import com.siertech.stapi.crud.CrudClass;
import com.siertech.stapi.util.Views;

import list.List;

@Entity
@Table(name = "proscontrasitem")
@Getter @Setter
public  class ProsContrasItem extends CrudClass {

	@JsonView(com.siertech.stapi.util.Views.Public.class)
	private String titulo;
	
	@JsonView(Views.Public.class)
	private  int tipo;

	@ManyToOne
	@JoinColumn(name="proscontras_id")
    @JsonView(Views.Public.class)
	private  ProsContras proscontras;

}
